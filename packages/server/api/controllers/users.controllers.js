const knex = require('../../config/db');

// Get All Users
const getUsers = async () => {
  return knex('users').select('*');
};

module.exports = {
  getUsers,
};
