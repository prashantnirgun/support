// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Countries extends Model {
  static get tableName() {
    return 'countries';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['country_name', 'payment_support'],

      properties: {
        id: { type: 'integer' },
        country_name: { type: 'string' },
        country_code: { type: 'integer' },
        currency_code: { type: 'string' },
        currency_symbol: { type: 'string' },
        payment_support: { type: ['string', 'integer'] }
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
  return Countries;
};
