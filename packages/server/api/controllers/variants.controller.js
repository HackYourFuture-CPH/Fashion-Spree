// const { query } = require('express');
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getVariantsByProductId = async (productId) => {
  const variantsProducts = Number(productId);
  if (variantsProducts % 1 !== 0) {
    throw new HttpError('Id should be a number', 400);
  }
  try {
    const variants = await knex('variants')
      .select('*')
      .where('product_id', `${variantsProducts}`);
    if (variants.length === 0) {
      throw new HttpError(
        `incorrect entry with the id of ${variantsProducts}`,
        404,
      );
    } else {
      return variants;
    }
  } catch (error) {
    if (error instanceof HttpError) {
      return error.message;
    }
  }
};

module.exports = {
  getVariantsByProductId,
};
