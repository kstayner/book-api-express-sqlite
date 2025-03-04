exports.up = function(knex) {
  return knex.schema.createTable('table_with_very_big_name_with_lot_of_characters_for_test_purpos', function(table) {
    table.increments('id').primary();
    table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
    table.datetime('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('table_with_very_big_name_with_lot_of_characters_for_test_purpos');
};