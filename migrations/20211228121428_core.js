exports.up = async function (knex) {
  await knex.schema.createTable('users_groups', (table) => {
    table.increments('id');
    table.string('user_group_name').notNullable();
    table.enum('status', ['Active', 'Suspended']).notNullable();
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.integer('user_group_id', 10).unsigned().notNullable();
    table.foreign('user_group_id').references('users_groups.id');
    table.string('email').unique();
    table.string('full_name').notNullable();
    table.string('password');
    table.string('mobile').notNullable();
    table
      .enum('user_status', ['Active', 'Suspended', 'Unapproved'])
      .notNullable();
    table.enum('email_verified', ['Yes', 'No']).notNullable();
    table.string('password_reset_token', 100);
    table.timestamp('password_reset_expiry');
    table.string('referral_code', 45);
    table.integer('referred_by');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('users_profiles', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('user_id', 10).unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.enum('gender', ['Male', 'Female', 'Other']).notNullable();
    table.string('date_of_birth', 45).notNullable();
    table.json('extraAttr');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('companies_users', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('user_id', 10).unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.integer('company_id', 10).unsigned().notNullable();
    table.foreign('company_id').references('companies.id');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('uploads', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('party_id', 10).unsigned().notNullable();
    table
      .enum('belongs_to', ['User', 'Product', 'Category', 'Banner'])
      .notNullable();
    table.string('original_name', 100).notNullable();
    table.string('mime_type', 20).notNullable();
    table.string('file_name', 255).notNullable();
    table.string('url', 255).notNullable();
    table.integer('size', 11).unsigned().notNullable();
    table.datetime('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('otp', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.string('otp_value', 10).notNullable();
    table.string('domain', 50).notNullable();
    table.string('ip', 25).notNullable();
    table.string('module', 255).notNullable();
    table.string('mobile', 15).notNullable();
    table.datetime('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('users_groups');
  await knex.schema.dropTable('users_profiles');
  await knex.schema.dropTable('companies_users');
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('uploads');
  await knex.schema.dropTable('otp');
};
