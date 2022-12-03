const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategories = async () => {
  try {
    const categories = await knex.select().table('categories');
    if (categories.length === 0) {
      throw new HttpError('No categories found', 404);
    }
    return categories;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getCategories,
};
