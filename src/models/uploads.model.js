// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Uploads extends Model {
  static get tableName() {
    return 'uploads';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'party_id',
        'belongs_to',
        'original_name',
        'mime_type',
        'file_name',
        'url',
        'size'
      ],

      properties: {
        id: { type: 'integer' },
        party_id: { type: 'integer' },
        belongs_to: { type: ['string', 'integer'] },
        original_name: { type: 'string' },
        mime_type: { type: 'string' },
        file_name: { type: 'string' },
        url: { type: 'string' },
        size: { type: 'integer' }
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
  return Uploads;
};
