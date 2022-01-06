// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class UsersGroups extends Model {
  static get tableName() {
    return 'users_groups';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_group_name'],

      properties: {
        id: { type: 'integer' },
        user_group_name: { type: 'string' },
        status: {
          type: ['string', 'integer']
        }
      }
    };
  }

  static get relationMappings() {
    const Users = require('./users');

    return {
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Users,
        join: {
          from: 'users_groups.id',
          to: 'users.users_group_id'
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
  return UsersGroups;
};
