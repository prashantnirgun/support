// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Units extends Model {
  static get tableName() {
    return 'units';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['company_id', 'unit_name', 'decimal_places', 'unit_base'],

      properties: {
        id: { type: 'integer' },
        company_id: { type: 'integer' },
        unit_name: { type: 'string' },
        decimal_places: { type: 'decimal' },
        unit_base: {
          type: ['string', 'integer']
        }
      }
    };
  }

  static get relationMappings() {
    const Products = require('./products.model');

    return {
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Products,
        join: {
          from: 'units.id',
          to: 'products.unit_id'
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
  return Units;
};
