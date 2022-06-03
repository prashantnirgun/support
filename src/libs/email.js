var config;

if (process.env.NODE_ENV === 'production') {
  config = require('../../config/production.json');
} else {
  config = require('../../config/default.json');
}

var nodemailer = require('nodemailer');
const logger = require('../logger');

function formattedEmail(account) {
  return account.display.length > 0
    ? account.display + ' <' + account.from + '>'
    : account.from;
}

//wrapper function for sednEaml
async function sendMail(options) {
  if (process.env.NODE_ENV !== 'development' || true) {
    return this.sendEmail(options);
  }
  return true;
}

async function sendEmail(emailOptions) {
  if (process.env.NODE_ENV !== 'development' || true) {
    emailOptions.account = emailOptions.account
      ? emailOptions.account
      : 'no-reply';
    const account = config.email.accounts[emailOptions.account];
    emailOptions.from = formattedEmail(account);
    emailOptions.to = config.email.defaultEmail || emailOptions.to;
    const connectionObjecct = {
      host: account.host,
      port: account.port,
      secure: true, // true for 465, false for other ports
      auth: {
        user: account.emailUser,
        pass: account.password
      }
    };
    var transporter = nodemailer.createTransport(connectionObjecct);
    try {
      const result = await transporter.sendMail(emailOptions);
      return result;
    } catch (error) {
      console.log('emailer error===>', error);
      logger.error(`to=${emailOptions.to} status=${JSON.stringify(error)}`);
    }
  }
  return false;
}

/*
 * Bulk Emailer it authenticate user crentials and then send it so no need to authenticate for each mail
 * To avoid Error: Invalid login: 454 4.7.0 Too many login attempts, please try again later. r22sm2149107pjp.7 - gsmtp
 */
async function bulkMailer(UserAccount = 'no-reply', datas) {
  const app = require('../app');
  const knex = app.get('knex');
  if (process.env.NODE_ENV !== 'development') {
    const account = config.email.accounts[UserAccount];
    try {
      var transporter = nodemailer.createTransport({
        host: account.host,
        port: account.port,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.emailUser,
          pass: account.password
        }
      });
      let index = 0;

      return Promise.all(
        datas.map(async (row) => {
          const party = row.to;
          row.account = row.account ? row.account : 'no-reply';
          const account = config.email.accounts[row.account];
          row.from = formattedEmail(account);
          row.to = config.email.defaultEmail || row.to;
          try {
            const response = await transporter.sendMail(row);
            const data = {
              email: row.to,
              subject: row.subject,
              status: 'Sent',
              error: JSON.stringify(response)
            };
            await knex('email_logs').insert(data);
            return {
              ...row,
              sent: true
            };
          } catch (error) {
            console.log('failed', error);
            return {
              ...row,
              sent: false,
              error
            };
          }
          index++;
        })
      );
    } catch (error) {
      logger.error(`Mail error ${index} ${JSON.stringify(error)}`);
      return error;
    }
  }
}

module.exports = {
  sendEmail,
  sendMail,
  bulkMailer
};
