// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class CompaniesUsers extends Model {
  static get tableName() {
    return 'companies_users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'company_id'],

      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        company_id: { type: 'integer' }
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
  return CompaniesUsers;
};
