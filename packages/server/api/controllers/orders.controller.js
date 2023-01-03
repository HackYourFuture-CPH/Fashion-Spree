const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// get order with status "created" by user-id
const getOrdersByUserId = async (token) => {
  const userUid = token.split(' ')[1];
  const user = (await knex('users').where({ uid: userUid }))[0];

  try {
    const favorites = await knex('orders')
      .select('products.name', 'products.price', 'order_items.quantity')
      .join('order_items', function () {
        this.on('orders.id', '=', 'order_items.order_id');
      })
      .join('variants', function () {
        this.on('order_items.variant_id', '=', 'variants.id');
      })
      .join('products', function () {
        this.on('variants.product_id', '=', 'products.id');
      })
      .where('orders.status', 'created')
      .andWhere('orders.user_id', `${user.id}`);

    if (favorites.length === 0) {
      throw new HttpError(
        `There are no favorites available with this user`,
        404,
      );
    }

    return favorites;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrdersByUserId,
};
