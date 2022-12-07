const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getFavorites = async () => {
  try {
    const favorites = await knex.select().table('favorites');
    if (favorites.length === 0) {
      throw new HttpError('No favorites found', 404);
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};

const createFavorites = async (body) => {
  await knex('favorites').insert({
    user_id: body.user_id,
    product_id: body.product_id,
    created_at: body.created_at,
  });

  return {
    successful: true,
  };
};

const deleteFavorites = async (favoritesId) => {
  return knex('favorites').where({ id: favoritesId }).del();
};
module.exports = {
  getFavorites,
  createFavorites,
  deleteFavorites,
};
