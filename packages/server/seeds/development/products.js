/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del();
  await knex('products').insert([
    {
      category_id: 3,
      name: 'Flowy Blouse',
      description: 'description',
      price: 50.5,
    },
    {
      category_id: 1,
      name: 'Straight-cut Jeans',
      description: 'description',
      price: 90.0,
    },
    {
      category_id: 2,
      name: 'Casual Trousers',
      description: 'description',
      price: 120.0,
    },
    {
      category_id: 4,
      name: 'Tailored-fit Jacket',
      description: 'description',
      price: 90.7,
    },
  ]);
};

// categories
// 1 { name: 'jeans' }
// 2 { name: 'trousers' }
// 3 { name: 'blouses' }
// 4 { name: 'jackets' }
