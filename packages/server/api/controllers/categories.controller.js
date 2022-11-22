const knex = require('../../config/db');
// const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getCategories = async () => {
  return knex('categories').select('categories.name');
};

module.exports = {
  getCategories,
};
