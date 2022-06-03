exports.up = async function (knex) {
  await knex.schema.createTable('categories', (table) => {
    table.increments('id');
    table.integer('company_id', 10).unsigned().notNullable();
    table.string('category_name', 50).notNullable();
    table.enum('is_display', ['Yes', 'No']).notNullable();
    table.integer('sort_order', 10).unsigned().notNullable();
    table.integer('primary_category_id', 10).unsigned().notNullable();
    table.string('slug', 100);
    table.text('description');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('categories');
};
