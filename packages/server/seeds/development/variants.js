/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('variants').del();
  await knex('variants').insert([
    { product_id: 2, color: 'red', size: 'Medium', picture: 1, stock: 15 },
    { product_id: 4, color: 'gray', size: 'Large', picture: 0, stock: 13 },
    {
      product_id: 1,
      color: 'yellow',
      size: 'XL',
      picture: 0,
      stock: 12,
    },
    {
      product_id: 3,
      color: 'black',
      size: 'XL',
      picture: 1,
      stock: 11,
    },
    { product_id: 5, color: 'blue', size: 'XXL', picture: 0, stock: 5 },
    { product_id: 6, color: 'white', size: 'XS', picture: 0, stock: 5 },
    { product_id: 5, color: 'yellow', size: 'Medium', picture: 1, stock: 5 },
    { product_id: 8, color: 'blue', size: 'Large', picture: 0, stock: 5 },
    { product_id: 7, color: 'merun', size: 'XL', picture: 1, stock: 5 },
    { product_id: 10, color: 'white', size: 'Small', picture: 0, stock: 5 },
    { product_id: 9, color: 'black', size: 'XXL', picture: 0, stock: 5 },
    { product_id: 3, color: 'orange', size: 'XL', picture: 1, stock: 5 },
    { product_id: 8, color: 'gray', size: 'Large', picture: 0, stock: 5 },
    { product_id: 2, color: 'blue', size: 'XXL', picture: 1, stock: 5 },
    { product_id: 1, color: 'red', size: 'Medium', picture: 0, stock: 5 },
    { product_id: 10, color: 'blue', size: 'Large', picture: 1, stock: 5 },
    { product_id: 11, color: 'brown', size: 'XS', picture: 1, stock: 5 },
    { product_id: 12, color: 'black', size: 'Small', picture: 0, stock: 5 },
    { product_id: 9, color: 'white', size: 'XS', picture: 0, stock: 5 },
    { product_id: 7, color: 'gray', size: 'XL', picture: 1, stock: 5 },
  ]);
};
