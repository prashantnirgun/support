// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Products extends Model {
  static get tableName() {
    return 'products';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'company_id',
        'product_name',
        'is_display',
        'category_id',
        'primary_category_id',
        'sort_order',
        'unit_id'
      ],

      properties: {
        id: { type: 'integer' },
        company_id: { type: 'integer' },
        product_name: { type: 'string' },
        is_display: { type: ['string', 'integer'] },
        category_id: { type: 'integer' },
        primary_category_id: { type: 'integer' },
        sort_order: { type: 'integer' },
        unit_id: { type: 'integer' },
        size: { type: 'string' },
        hsn: { type: 'string' },
        tag: { type: 'string' },
        alternative_text: { type: 'string' },
        description: { type: 'string' },
        benefits: { type: 'string' },
        how_to_use: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    const Category = require('./categories.model');
    const Unit = require('./units.model');

    return {
      category: {
        relation: Model.HasOneRelation,
        modelClass: Category,
        join: {
          from: 'products.id',
          to: 'categories.category_id'
        }
      },
      unit: {
        relation: Model.HasOneRelation,
        modelClass: Unit,
        join: {
          from: 'products.unit_id',
          to: 'units.id'
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
  return Products;
};
