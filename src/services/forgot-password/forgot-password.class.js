const UsersModel = require('../../models/users.model')();
const errors = require('@feathersjs/errors');
const bcrypt = require('bcryptjs');
const Mail = require('../../libs/email');
const { header, footer } = require('../../libs/email-templates/layout');
const {
  resetPasswordRequest
} = require('../../libs/email-templates/resetPasswordRequest');
const moment = require('moment');
const { changePassword } = require('../../libs/email-templates/changePassword');
const ENUMS = require('../../libs/utility/enums');

exports.ForgotPassword = class ForgotPassword {
  constructor(options, app) {
    // const { Model, ...otherOptions } = options;

    // super({
    //   ...otherOptions,
    //   model: Model
    // });

    this.deployment = app.get('deployment');
  }

  async create(data, params) {
    try {
      let userEmail = data.email;
      let dbUser = await UsersModel.query().where('email', userEmail).first();

      if (!dbUser) {
        throw new errors.BadRequest('User not found');
      }

      let resetPasswordToken = require('crypto')
        .randomBytes(32)
        .toString('hex')
        .substring(0, 10);

      let currentTime = new Date();
      currentTime.setHours(currentTime.getHours() + 4);
      console.log('after', moment(currentTime).format('YYYY-MM-DD HH:mm:ss'));
      const dataToUpdate = {
        password_reset_token: resetPasswordToken,
        password_reset_expiry: moment(currentTime).format('YYYY-MM-DD HH:mm:ss')
      };

      let editUser = await UsersModel.query()
        .where('email', userEmail)
        .patch(dataToUpdate);

      if (editUser) {
        const content = {
          user: dbUser.full_name,
          link:
            this.deployment.ip +
            `/reset-password?${ENUMS.redirectCode.FORGOTCODE}=${resetPasswordToken}`
        };
        const body = resetPasswordRequest(content);
        const htmlMessage = header + body + footer;
        const mailOptions = {
          to: userEmail,
          account: 'no-reply',
          subject: 'Your TSS Support password reset request',
          html: htmlMessage
        };
        const status = await Mail.sendMail(mailOptions);
        if (status) {
          return {
            code: 201,
            status: 'success',
            message: 'Reset password link sent to your email'
          };
        }
      }
    } catch (error) {
      console.log('error', error);
      return error;
      //throw new errors.BadRequest("Something went wrong");
    }
  }

  async find(params) {
    let resetToken = params.query.resetToken;
    let validRequest = await this.validRequest({ resetToken });
    if (validRequest && validRequest.status) {
      return {
        code: 200,
        status: 'success',
        message: 'Reset token verified',
        user_id: validRequest.data.id
      };
    }
  }

  async patch(id, data, params) {
    console.log('patch=>', id, data, params);
    // Password change request
    const newPassword = data.newPassword;
    //const resetToken = id;
    const resetToken = data.resetToken;

    let response = await this.validRequest({ resetToken });
    //console.log('response', response);
    if (response.status) {
      var hash = bcrypt.hashSync(newPassword);
      let resetPassword = await UsersModel.query()
        .where('password_reset_token', resetToken)
        .patch({
          password: hash,
          password_reset_token: null,
          password_reset_expiry: null
        });
      if (resetPassword) {
        const content = {
          user: response.data.full_name,
          link: this.deployment.ip + '/authentication'
        };

        const body = changePassword(content);
        const htmlMessage = header + body + footer;

        const mailOptions = {
          to: response.data.email,
          subject: 'Your Password has been updated',
          html: htmlMessage
        };
        Mail.sendMail(mailOptions);

        return {
          code: 200,
          status: 'success',
          message: 'Password reset successfully.'
        };
      }
    }
  }

  async validRequest(options) {
    const { resetToken } = options;
    let userDetails = await UsersModel.query()
      .where('password_reset_token', resetToken)
      .first();

    if (userDetails) {
      let passwordResetExpiration = userDetails.password_reset_expiry;
      let storedToken = userDetails.password_reset_token;
      let currentTimeStamp = new Date();
      if (
        storedToken == resetToken &&
        moment(passwordResetExpiration).isAfter(currentTimeStamp)
      ) {
        return { status: true, data: userDetails };
      } else {
        throw new errors.BadRequest('Reset token expired');
      }
    } else {
      throw new errors.BadRequest('Invalid reset token');
    }
  }
};
