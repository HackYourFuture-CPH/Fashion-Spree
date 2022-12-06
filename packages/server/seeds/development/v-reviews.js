/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del();
  await knex('reviews').insert([
    {
      id: 1,
      product_id: 2,
      user_id: 1,
      rating: 3,
      review_text: 'Not bad',
    },
    {
      id: 2,
      product_id: 5,
      user_id: 2,
      rating: 4,
      review_text: 'very good',
    },
    {
      id: 3,
      product_id: 4,
      user_id: 3,
      rating: 1,
      review_text: 'poor quality ',
    },
    {
      id: 4,
      product_id: 4,
      user_id: 4,
      rating: 5,
      review_text: 'excellent',
    },
    {
      id: 5,
      product_id: 16,
      user_id: 1,
      rating: 2,
      review_text: 'fair quality ',
    },
    {
      id: 6,
      product_id: 10,
      user_id: 2,
      rating: 5,
      review_text: 'I love it so much',
    },
    {
      id: 7,
      product_id: 12,
      user_id: 3,
      rating: 2,
      review_text: 'Very bad quality',
    },
    {
      id: 8,
      product_id: 8,
      user_id: 1,
      rating: 1,
      review_text: 'Very bad shape',
    },
  ]);
};
