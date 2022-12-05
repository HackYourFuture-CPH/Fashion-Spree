/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.increments();
    table.integer('order_id').unsigned();
    table.foreign('order_id').references('id').inTable('orders');
    table.integer('product_id').unsigned();
    table.foreign('product_id').references('id').inTable('products');
    table.integer('quantity').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
