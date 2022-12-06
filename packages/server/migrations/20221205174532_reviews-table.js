/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').notNullable();
    table.integer('product_id').notNullable();
    table.integer('user_id').notNullable();
    table.enum('rating', ['1', '2', '3', '4', '5']);
    table.string('review_text');
    table.foreign('reviews_id').references('id').inTable('products');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('reviews');
};
