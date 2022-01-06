// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Address extends Model {
  static get tableName() {
    return 'address';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['belongs_to', 'party_id', 'is_default'],

      properties: {
        id: { type: 'integer' },
        belongs_to: {
          type: ['string', 'integer']
        },
        party_id: { type: 'integer' },
        full_name: { type: 'string' },
        telephone: { type: 'string' },
        pincode: { type: 'string' },
        apartment: { type: 'string' },
        area: { type: 'string' },
        landmark: { type: 'string' },
        is_default: {
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
  return Address;
};
