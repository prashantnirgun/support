exports.up = async function (knex) {
  await knex.schema.createTable('attendances', function (table) {
    table.increments('id', 10).primary().unsigned().notNullable();
    table.integer('user_id', 10).unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.date('attendance_date').notNullable();
    table.time('check_in');
    table.time('check_out');
    table.float('check_in_latitude');
    table.float('check_in_longitude');
    table.float('check_out_latitude');
    table.float('check_out_longitude');
    table.integer('hours', 10).unsigned().notNullable();
    table
      .enum('day_status', ['Present', 'Absent', 'Weekend', 'National Holiday'])
      .notNullable();
    table.string('remaks', 50);
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('attendances');
};
