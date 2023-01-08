// const { query } = require('express');
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getVariantsProductByAtribute = async (req) => {
  const variantsProducts = Number(req.product_id);
  if (variantsProducts % 1 !== 0) {
    throw new HttpError('Id should be a number', 400);
  }
  try {
    let condition = { product_id: req.product_id };
    if (req.color) {
      condition = { ...condition, color: req.color };
    }
    if (req.size) {
      condition = { ...condition, size: req.size };
    }

    const variants = await knex('variants').select('*').where(condition);

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
  getVariantsProductByAtribute,
};
