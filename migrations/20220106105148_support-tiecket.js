exports.up = async function (knex) {
  await knex.schema.createTable('tickets', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('company_id', 10).unsigned().notNullable();
    table.foreign('company_id').references('companies.id');
    table
      .enum('ticket_status', ['Open', 'Close', 'Response Awaiting'])
      .notNullable();
    table.integer('user_id', 10).unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.string('contact_person', 50);
    table.string('contact_no', 25);
    table.string('subject', 50);
    table.text('description');
    table.enum('priority', ['Low', 'Normal', 'Urgent']).notNullable();
    table.enum('read_flag', ['Read', 'Unread']).notNullable();
    table.enum('generated_by', ['Telephone', 'Email']).notNullable();
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('tickets_details', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('ticket_id', 10).unsigned().notNullable();
    table.foreign('ticket_id').references('tickets.id');
    table.text('description');
    table.enum('ticket_type', ['Open', 'Internal']).notNullable();
    table.enum('priority', ['Low', 'Normal', 'Urgent']).notNullable();
    table.enum('read_flag', ['Read', 'Unread']).notNullable();
    table.enum('generated_by', ['Telephone', 'Email']).notNullable();
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('tickets_transfers', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('ticket_id', 10).unsigned().notNullable();
    table.foreign('ticket_id').references('tickets.id');
    table.integer('user_id', 10).unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('tickets');
  await knex.schema.dropTable('tickets_details');
  await knex.schema.dropTable('tickets_transfers');
};
