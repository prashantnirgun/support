const { Model } = require('objection');
const knex = require('knex');

module.exports = function (app) {
  const { client, connection } = app.get('mysql');
  const db = knex({ client, connection, useNullAsDefault: false });

  Model.knex(db);

  app.set('knex', db);
};
