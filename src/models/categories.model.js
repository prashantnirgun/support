// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Categories extends Model {
  static get tableName() {
    return 'categories';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'company_id',
        'category_name',
        'is_display',
        'sort_order',
        'primary_category_id'
      ],

      properties: {
        id: { type: 'integer' },
        company_id: { type: 'integer' },
        category_name: { type: ['string'] },
        is_display: { type: ['string', 'integer'] },
        sort_order: { type: 'integer' },
        primary_category_id: { type: 'integer' },
        slug: { type: ['string', 'null'] },
        description: { type: ['string', 'null'] }
      }
    };
  }

  static get relationMappings() {
    const Products = require('./products.model');
    const Category = require('./categories.model');

    return {
      product: {
        relation: Model.HasManyRelation,
        modelClass: Products,
        join: {
          from: 'categories.id',
          to: 'products.category_id'
        }
      },

      category: {
        relation: Model.HasOneRelation,
        modelClass: Category,
        join: {
          from: 'categories.primary_category_id',
          to: 'categories.id'
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
  return Categories;
};
