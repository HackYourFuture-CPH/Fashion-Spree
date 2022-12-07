/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('favorites').del();
  await knex('favorites').insert([
    { user_id: '1', product_id: '1' },
    { user_id: '2', product_id: '2' },
    { user_id: '3', product_id: '1' },
    { user_id: '4', product_id: '6' },
    { user_id: '5', product_id: '2' },
    { user_id: '6', product_id: '5' },
    { user_id: '7', product_id: '1' },
    { user_id: '8', product_id: '4' },
    { user_id: '9', product_id: '9' },
    { user_id: '10', product_id: '1' },
    { user_id: '11', product_id: '2' },
    { user_id: '12', product_id: '10' },
  ]);
};
