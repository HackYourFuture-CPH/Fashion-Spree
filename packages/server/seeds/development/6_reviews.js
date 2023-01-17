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
      rating: 4,
      review_text:
        'Super good experience. Now I have bought a few times from Fashion Spree and I can only say that it is a good experience. Good product, fast delivery, friendly/helpful customer service and I can only recommend buying here. Sincerely, Ada Loveace ',
    },
    {
      id: 2,
      product_id: 5,
      user_id: 2,
      rating: 5,
      review_text:
        'Ordered in the evening the next day it was sent, so fast delivery and everything was fine. Was in the parcel shop the next day so its a quick trip to shop and really easy without stress.',
    },
    {
      id: 3,
      product_id: 4,
      user_id: 3,
      rating: 3,
      review_text:
        'Easy to order via website Fashion Spree, good prices and fast delivery Unfortunately, I have received an item that is not quite right. But we have made a complaint and are awaiting a response.',
    },
    {
      id: 4,
      product_id: 4,
      user_id: 4,
      rating: 5,
      review_text:
        'Always quality products at a reasonable price, simple and clear website and easy to order. Deliveries are incredibly fast and even returned goods are dispatched to UG. Thank you for you.',
    },
    {
      id: 5,
      product_id: 16,
      user_id: 1,
      rating: 4,
      review_text:
        'I can only recommend shopping here, fast order confirmation and delivery status and the package was delivered 2 days later.',
    },
    {
      id: 6,
      product_id: 10,
      user_id: 2,
      rating: 5,
      review_text:
        'Good and very fast processing of my order and the goods are fine and of good quality.',
    },
    {
      id: 7,
      product_id: 12,
      user_id: 3,
      rating: 5,
      review_text:
        'It was really nice prodduct actually, I am very satisfy with the price, model and the delivery. It was super fast. Thank you so much Fashion Spree',
    },
    {
      id: 8,
      product_id: 8,
      user_id: 2,
      rating: 4,
      review_text: 'One time I was buying for my wife and she loves it.',
    },
    {
      id: 9,
      product_id: 1,
      user_id: 3,
      rating: 5,
      review_text:
        'The blouse was fantastically beautiful and lovely to. The blouse was fantastically beautiful and lovely to wear. The package arrived quickly, even though it was Christmas.',
    },
  ]);
};
