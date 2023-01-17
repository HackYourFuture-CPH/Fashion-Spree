/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('variants', (table) => {
    table.increments();
    table.integer('product_id').unsigned();
    table.foreign('product_id').references('id').inTable('products');
    table.enum('color', [
      'Red',
      'Yellow',
      'Blue',
      'Black',
      'White',
      'Brown',
      'Gray',
      'Maroon',
      'Orange',
    ]);
    table.enum('size', ['XS', 'Small', 'Medium', 'Large', 'XL', 'XXL', '3XL']);
    table.string('pictureUrl');
    table.integer('stock');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('variants');
};
