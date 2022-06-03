const { Service } = require('feathers-objection');
const errors = require('@feathersjs/errors');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const { header, footer } = require('../../libs/email-templates/layout');
const { changePassword } = require('../../libs/email-templates/changePassword');

const ENUMS = require('../../libs/utility/enums');
const Mail = require('../../libs/email');

exports.Users = class Users extends Service {
  constructor(options, app) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
    this.sault = app.get('authentication').secret;
    this.ip = app.get('deployment').ip;
    this.app = app;
  }

  async patch(id, data, params) {
    try {
      if (!data.controller) {
        delete data.password;
        const keys = Object.keys(data);
        if (keys.length > 0) {
          return await super.patch(id, data, params);
        } else {
          throw new errors.BadRequest('Something went wrong');
        }
      } else {
        switch (data.controller) {
          case 'updatePasswordRequest':
            return this.updatePassword(id, data, params);
          case 'sendVarificationMail': //called from login page
            return this.sendVarificationMail(id, data, params);
          default:
            break;
        }
      }
    } catch (error) {
      console.log('error in users.class.js', error);
      return error;
    }
  }

  async updatePassword(id, data, params) {
    const { password, parent_name, email } = await this.Model.query().findById(
      id
    );
    bcrypt.hashSync(this.sault);
    const checkPassword = bcrypt.compareSync(data.oldPassword, password);

    if (checkPassword) {
      delete data.controller;
      delete data.confirmPassword;
      delete data.oldPassword;

      const result = await super.patch(id, data, params);
      delete result.password;

      const content = {
        user: parent_name,
        link: this.ip + '/authentication'
      };

      const body = changePassword(content);

      const htmlMessage = header + body + footer;

      const mailOptions = {
        account: 'contact',
        to: email,
        subject: 'Your Password has been updated',
        html: htmlMessage,
        link: this.ip + '/authentication'
      };
      Mail.sendMail(mailOptions);
      return result;
    } else {
      throw new errors.BadRequest('Current password wrong');
    }
  }

  //Used in User login
  async sendVarificationMail(id, data, params) {
    const { parent_name, email } = await this.Model.query().findById(id);
    var md5sum = crypto.createHash('md5').update(email).digest('hex');

    const content = {
      user: parent_name,
      link: `${this.ip}/varify-email?${ENUMS.redirectCode.VERIFYEMAILCODE}=${md5sum}`
    };
    const body = signupNew(content);
    const htmlMessage = header + body + footer;
    const mailOptions = {
      account: 'contact',
      to: email,
      subject: 'Verify your Email',
      html: htmlMessage
    };
    const response = await Mail.sendMail(mailOptions);
    return {
      status: response,
      message: response ? 'Send Mail successfully' : 'Error in sending mail'
    };
  }
};
