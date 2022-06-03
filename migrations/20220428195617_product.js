exports.up = async function (knex) {
  await knex.schema.createTable('units', (table) => {
    table.increments('id');
    table.integer('company_id', 10).unsigned().notNullable();
    table.foreign('company_id').references('companies.id');
    table.string('unit_name', 50).notNullable();
    table.tinyint('decimal_places', 1).unsigned().notNullable();
    table.enum('unit_base', ['Weight', 'Bag']).notNullable();
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.integer('company_id', 10).unsigned().notNullable();
    table.string('product_name', 50).notNullable();
    table.enum('is_display', ['Yes', 'No']).notNullable();
    table.integer('category_id', 10).unsigned().notNullable();
    table.foreign('category_id').references('categories.id');
    table.integer('primary_category_id', 10).unsigned().notNullable();
    table.integer('sort_order', 10).unsigned().notNullable();
    table.integer('unit_id', 10).unsigned().notNullable();
    table.foreign('unit_id').references('units.id');
    table.string('size', 15);
    table.string('hsn', 50);
    table.text('tag');
    table.string('alternative_text', 100);
    table.text('description');
    table.text('benefits');
    table.text('how_to_use');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });

  await knex.schema.createTable('products_detail', (table) => {
    table.integer('product_id', 10).unsigned().notNullable();
    table.foreign('product_id').references('products.id');
    table.decimal('purchase_rate', 2).unsigned().notNullable();
    table.decimal('sales_rate', 2).unsigned().notNullable();
    table.decimal('mrp', 2).unsigned().notNullable();
    table.decimal('minimum_order_qty', 3).unsigned().notNullable();
    table.tinyint('minimum_days', 3).unsigned().notNullable();
    table.string('product_name', 50).notNullable();
    table.enum('is_display', ['Yes', 'No']).notNullable();
    table.integer('sort_order', 10).unsigned().notNullable();
    table.string('size', 15);
    table.string('hsn', 50);
    table.text('tag');
    table.string('alternative_text', 100);
    table.text('description');
    table.text('benefits');
    table.text('how_to_use');
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('units');
  await knex.schema.dropTable('products');
  await knex.schema.dropTable('products_detail');
};
