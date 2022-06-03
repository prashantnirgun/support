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
        gst_no: { type: ['string', 'null'] },
        state_id: { type: 'integer' },
        is_inventory: {
          type: ['string', 'integer']
        },
        extraAttr: { type: 'any' }
      }
    };
  }

  static get relationMappings() {
    const States = require('./states.model');

    return {
      states: {
        relation: Model.BelongsToOneRelation,
        modelClass: States,
        join: {
          from: 'companies.state_id',
          to: 'states.id'
        }
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
