const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getVariantsByProductId = async (productId) => {
  if (!productId) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const variants = await knex('variants')
      .select('*')
      .where('product_id', `${productId}`);
    if (variants.length === 0) {
      throw new HttpError(`incorrect entry with the id of ${productId}`, 404);
    }
    return variants;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getVariantsByProductId,
};
