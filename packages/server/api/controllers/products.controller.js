const knex = require('../../config/db');

const getProducts = async () => {
  return knex.select().table('products');
};

module.exports = {
  getProducts,
};
