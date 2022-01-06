// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Otp extends Model {
  static get tableName() {
    return 'otp';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],
      required: ['otp_value', 'domain', 'ip', 'module', 'mobile'],

      properties: {
        id: { type: 'integer' },
        otp_value: { type: 'string' },
        domain: { type: 'string' },
        ip: { type: 'string' },
        module: { type: 'string' },
        mobile: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = function (app) {
  return Otp;
};
