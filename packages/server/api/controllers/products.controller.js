const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// Get products by id
const getProductById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const products = await knex('products')
      .select('products.id as id', 'name', 'description', 'price')
      .where({ id });
    if (products.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return products;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getProductById,
};
