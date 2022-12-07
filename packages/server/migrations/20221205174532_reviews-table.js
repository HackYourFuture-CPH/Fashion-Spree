/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.integer('product_id').unsigned();
    table.foreign('product_id').references('id').inTable('products');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.enum('rating', ['1', '2', '3', '4', '5']);
    table.string('review_text');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('reviews');
};
