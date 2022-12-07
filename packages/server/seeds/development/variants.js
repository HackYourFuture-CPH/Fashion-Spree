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
      picture: '.jpg',
      product_id: 2,
      size: 'Medium',
      stock: 15,
    },
    {
      color: 'gray',
      picture: '.jpg',
      product_id: 4,
      size: 'Large',
      stock: 13,
    },
    {
      color: 'yellow',
      picture: '.jpg',
      product_id: 1,
      size: 'XL',
      stock: 12,
    },
    {
      color: 'black',
      picture: '.jng',
      product_id: 3,
      size: 'XL',
      stock: 11,
    },
    {
      color: 'blue',
      picture: '.png',
      product_id: 14,
      size: 'Medium',
      stock: 19,
    },
    {
      color: 'white',
      picture: '.png',
      product_id: '15',
      size: 'XS',
      stock: 22,
    },
    {
      color: 'yellow',
      picture: '.jpg',
      product_id: 5,
      size: 'Medium',
      stock: 8,
    },
    {
      color: 'blue',
      picture: '.png',
      product_id: 8,
      size: 'Large',
      stock: 30,
    },
    { product_id: 7, color: 'merun', size: 'XL', picture: '.svg', stock: 18 },
    {
      product_id: 10,
      color: 'white',
      size: 'Small',
      picture: '.svg',
      stock: 25,
    },
    {
      product_id: 13,
      color: 'black',
      size: 'XXL',
      picture: '.png',
      stock: 15,
    },
    {
      product_id: 6,
      color: 'orange',
      size: '3XL',
      picture: '.jpg',
      stock: 10,
    },
    {
      product_id: 8,
      color: 'gray',
      size: 'Large',
      picture: '.svg',
      stock: 13,
    },
    { product_id: 16, color: 'blue', size: 'XXL', picture: '.svg', stock: 12 },
    {
      product_id: 1,
      color: 'red',
      size: 'Medium',
      picture: '.jpg',
      stock: 25,
    },
    {
      product_id: 10,
      color: 'blue',
      size: 'Large',
      picture: '.svg',
      stock: 15,
    },
    {
      product_id: 11,
      color: 'brown',
      size: 'XS',
      picture: '.jpg',
      stock: 22,
    },
    {
      product_id: 12,
      color: 'black',
      size: 'Small',
      picture: '.svg',
      stock: 18,
    },
    { product_id: 9, color: 'white', size: 'XS', picture: '.png', stock: 20 },
  ]);
};
