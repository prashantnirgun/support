// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Companies extends Model {
  static get tableName() {
    return 'companies';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['company_name', 'state_id', 'is_inventory'],

      properties: {
        id: { type: 'integer' },
        company_name: { type: 'string' },
        domain: { type: 'string' },
        gst_no: { type: 'string' },
        state_id: { type: 'integer' },
        is_inventory: {
          type: ['string', 'integer']
        },
        extraAttr: { type: 'any' }
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
  return Companies;
};
