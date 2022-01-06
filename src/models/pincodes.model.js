// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Pincodes extends Model {
  static get tableName() {
    return 'pincodes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['area_name'],

      properties: {
        id: { type: 'integer' },
        area_name: { type: 'string' },
        company_id: { type: 'integer' },
        region: { type: 'string' },
        delivery_charges_type: { type: ['string', 'integer'] },
        minimum_order: { type: 'deicmal' }
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
  return Pincodes;
};
