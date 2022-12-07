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

module.exports = {
  getAllReviews,
};
