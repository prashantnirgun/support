exports.up = async function (knex) {
  await knex.schema.createTable('address', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.enum('belongs_to', ['User', 'Company', 'Godown']).notNullable();
    table.integer('party_id', 10).unsigned().notNullable();
    table.string('full_name', 50);
    table.string('telephone', 50);
    table.string('pincode', 10);
    table.string('apartment', 50);
    table.string('area', 50);
    table.string('landmark', 50);
    table.enum('is_default', ['Yes', 'No']).notNullable().defaultTo('No');
    table.json('extraAttr');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('countries', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.string('country_name', 100).notNullable();
    table.integer('country_code');
    table.string('currency_code', 3);
    table.string('currency_symbol', 3);
    table.enum('payment_support', ['Yes', 'No']).notNullable().defaultTo('No');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('states', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.string('state_name', 100).notNullable();
    table.integer('gst_state_code');
    table.integer('country_id', 10).unsigned().notNullable();
    table.foreign('country_id').references('countries.id');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('companies', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.string('company_name', 50).notNullable();
    table.string('domain', 50);
    table.string('gst_no', 15);
    table.integer('state_id', 10).unsigned().notNullable();
    table.foreign('state_id').references('states.id');
    table.enum('is_inventory', ['Yes', 'No']).notNullable();
    table.json('extraAttr');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('pincodes', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.string('area_name', 100).notNullable();
    table.integer('company_id', 10).unsigned().notNullable();
    table.foreign('company_id').references('companies.id');
    table.string('region', 15);
    table
      .enum('delivery_charges_type', ['Fixed', 'Percentage'])
      .notNullable()
      .defaultTo('Fixed');
    table.decimal('minimum_order', 12, 2).defaultTo(0);
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('address');
  await knex.schema.dropTable('countries');
  await knex.schema.dropTable('states');
  await knex.schema.dropTable('companies');
  await knex.schema.dropTable('pincodes');
};
