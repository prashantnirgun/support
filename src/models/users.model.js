// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'full_name',
        'password',
        'mobile',
        'user_status',
        'email_verified'
      ],

      properties: {
        id: { type: 'integer' },
        user_group_id: { type: 'integer' },
        email: { type: ['string', 'null'] },
        full_name: { type: 'string' },
        password: 'string',
        email_varified: { type: 'integer' },
        extraAttr: { type: 'any' },
        mobile: { type: 'string' },
        password_reset_token: {
          type: ['string', 'null']
        },
        password_reset_expiry: {
          type: ['string', 'null']
        },
        referral_code: {
          type: ['string', 'null']
        },
        referred_by: {
          type: ['integer', 'null']
        }
      }
    };
  }

  static get relationMappings() {
    const UsersGroups = require('./users-groups.model');

    return {
      pets: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersGroups,
        join: {
          from: 'users.id',
          to: 'users_groups.id'
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
  return Users;
};
