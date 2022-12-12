const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// get
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
// get by user-id
const getFavoritesByUserId = async (userId) => {
  if (!isNaN(userId)) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    // const favorites = await knex('favorites')
    // .join('users', { 'favorites.user_id': 'users.id' })
    // .join('products', { 'favorites.user_id': 'products.id' })
    // .select('products.id', 'user_id', 'name', 'price')
    // .where('user_id', '=', `${userId}`);
    const favorites = await knex('favorites')
      .join('users', { 'favorites.user_id': 'users.id' })
      .select('*')
      .where('user_id', '=', `${userId}`);
    if (favorites.length === 0) {
      throw new HttpError(
        `There are no favorites available with this user ${userId}`,
        404,
      );
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};

// post
const createFavorites = async (body) => {
  if (!body.user_id || !body.product_id) {
    throw new HttpError('enter a value', 400);
  }
  try {
    await knex('favorites').insert({
      user_id: body.user_id,
      product_id: body.product_id,
    });
    return {
      successful: true,
    };
  } catch (error) {
    return error.message;
  }
};

// delete
const deleteFavorites = async (favoritesId) => {
  if (!favoritesId) {
    throw new HttpError('please enter ID to delete your favorite.', 400);
  }
  try {
    const deletedFav = knex('favorites').where({ id: favoritesId }).del();
    if (deletedFav === 0) {
      throw new HttpError('The favorites ID you provided does not exist.', 400);
    } else {
      return deletedFav;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getFavorites,
  getFavoritesByUserId,
  createFavorites,
  deleteFavorites,
};
