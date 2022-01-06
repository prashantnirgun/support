// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class States extends Model {
  static get tableName() {
    return 'states';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['state_name'],

      properties: {
        id: { type: 'integer' },
        state_name: { type: 'string' },
        gst_state_code: { type: 'string' },
        country_id: { type: 'integer' }
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
  return States;
};
