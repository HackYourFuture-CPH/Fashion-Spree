/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('order_items').del();
  await knex('order_items').insert([
    { order_id: 1, product_id: 1, quantity: 1 },
    { order_id: 2, product_id: 3, quantity: 3 },
    { order_id: 3, product_id: 2, quantity: 2 },
    { order_id: 4, product_id: 1, quantity: 2 },
  ]);
};
