const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategories = async () => {
  try {
    const categoris = await knex.select().table('categories');
    if (categoris.length === 0) {
      throw new HttpError('Invalid Category', 404);
    }
    return categoris;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getCategories,
};
