/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('variants').del();
  await knex('variants').insert([
    {
      color: 'red',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 2,
      size: 'Medium',
      stock: 15,
    },
    {
      color: 'gray',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 4,
      size: 'Large',
      stock: 13,
    },
    {
      color: 'yellow',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 1,
      size: 'XL',
      stock: 12,
    },
    {
      color: 'black',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 3,
      size: 'XL',
      stock: 11,
    },
    {
      color: 'blue',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 14,
      size: 'Medium',
      stock: 19,
    },
    {
      color: 'white',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: '15',
      size: 'XS',
      stock: 22,
    },
    {
      color: 'yellow',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 5,
      size: 'Medium',
      stock: 8,
    },
    {
      color: 'blue',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      product_id: 8,
      size: 'Large',
      stock: 30,
    },
    {
      product_id: 7,
      color: 'merun',
      size: 'XL',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 18,
    },
    {
      product_id: 10,
      color: 'white',
      size: 'Small',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 25,
    },
    {
      product_id: 13,
      color: 'black',
      size: 'XXL',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 15,
    },
    {
      product_id: 6,
      color: 'orange',
      size: '3XL',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 10,
    },
    {
      product_id: 8,
      color: 'gray',
      size: 'Large',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 13,
    },
    {
      product_id: 16,
      color: 'blue',
      size: 'XXL',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 12,
    },
    {
      product_id: 1,
      color: 'red',
      size: 'Medium',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 25,
    },
    {
      product_id: 10,
      color: 'blue',
      size: 'Large',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 15,
    },
    {
      product_id: 11,
      color: 'brown',
      size: 'XS',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 22,
    },
    {
      product_id: 12,
      color: 'black',
      size: 'Small',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 18,
    },
    {
      product_id: 9,
      color: 'white',
      size: 'XS',
      pictureUrl: 'packages/client/src/assets/jeans&shoes.jpg',
      stock: 20,
    },
  ]);
};
