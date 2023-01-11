const knex = require('../../config/db');

// post
const createUsers = async (body) => {
  try {
    await knex('users').insert({
      full_name: body.full_name,
      email: body.email,
      uid: body.uid,
    });
    return {
      successful: true,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUsers,
};
