const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getAllReviews = async () => {
  try {
    const allReviews = await knex.select().table('reviews');

    if (allReviews.length === 0) {
      throw new HttpError(`No reviews`, 404);
    }
    return allReviews;
  } catch (error) {
    return error.message;
  }
};

const getReviewsByProductId = async (productId) => {
  if (!productId) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const reviews = await knex('reviews')
      .select('*')
      .where('product_id', `${productId}`);
    if (reviews.length === 0) {
      throw new HttpError(`incorrect entry with the id of ${productId}`, 404);
    }
    return reviews;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllReviews,
  getReviewsByProductId,
};
