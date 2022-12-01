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
    {
      category_id: 3,
      name: 'Peplum Top',
      description: 'description',
      price: 70.5,
    },
    {
      category_id: 1,
      name: 'Ripped Black Jeans',
      description: 'description',
      price: 120.0,
    },
    {
      category_id: 2,
      name: 'Cargo Trousers',
      description: 'description',
      price: 80.0,
    },
    {
      category_id: 4,
      name: 'Bomber Jacket',
      description: 'description',
      price: 150.0,
    },
    {
      category_id: 3,
      name: 'Puff-sleeve Blouse',
      description: 'description',
      price: 30.9,
    },
    {
      category_id: 3,
      name: 'Button-up Blouse',
      description: 'description',
      price: 25.5,
    },
    {
      category_id: 1,
      name: 'Washed Effect Jeans',
      description: 'description',
      price: 85.0,
    },
    {
      category_id: 2,
      name: 'Jersey Trousers',
      description: 'description',
      price: 60.5,
    },
    {
      category_id: 4,
      name: 'Padded Neon Jacket',
      description: 'description',
      price: 110.3,
    },
    {
      category_id: 1,
      name: 'Mom Jeans',
      description: 'description',
      price: 75.0,
    },
    {
      category_id: 2,
      name: 'Formal Navy Trousers',
      description: 'description',
      price: 130.0,
    },
    {
      category_id: 4,
      name: 'Teddy Bear Jacket',
      description: 'description',
      price: 150.0,
    },
  ]);
};

// categories
// 1 { name: 'jeans' }
// 2 { name: 'trousers' }
// 3 { name: 'blouses' }
// 4 { name: 'jackets' }
