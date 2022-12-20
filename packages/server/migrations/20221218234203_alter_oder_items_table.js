/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('order_items', (table) => {
    table.dropForeign('product_id');
    table.dropColumn('product_id');
    table.integer('variant_id').unsigned();
    table.foreign('variant_id').references('id').inTable('variants');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('order_items', (table) => {
    table.dropForeign('variant_id');
    table.dropColumn('variant_id');
    table.integer('product_id').unsigned();
    table.foreign('product_id').references('id').inTable('products');
  });
};
