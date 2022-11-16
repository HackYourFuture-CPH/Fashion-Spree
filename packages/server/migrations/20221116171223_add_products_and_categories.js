/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('categories', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
    .createTable('products', (table) => {
      table.increments();
      table.integer('category_id').unsigned();
      table.foreign('category_id').references('id').inTable('categories');
      table.string('name').notNullable();
      table.string('description');
      table.decimal('price').notNullable();
      table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('products').dropTable('categories');
};
