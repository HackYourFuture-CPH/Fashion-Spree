const knex = require('../../config/db');
// const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getProducts = async () => {
  return knex('products').select(
    'products.category_id',
    'products.name',
    'products.description',
    'products.price',
  );
};

module.exports = {
  getProducts,
};
