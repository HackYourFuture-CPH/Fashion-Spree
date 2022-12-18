const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrderItemsByUserId = async (token) => {
  try {
    if (!token) {
      throw new HttpError('You are not authenticated', 401);
    }

    const userUid = token.split(' ')[1];

    if (!userUid) {
      throw new HttpError('Token is wrong', 400);
    }

    const user = (await knex('users').where({ uid: userUid }))[0];

    if (!user) {
      throw new HttpError('User was not found', 404);
    }

    const orderItems = await knex('orders')
      .where({
        user_id: user.id,
        status: 'created',
      })
      .join('order_items', 'orders.id', 'order_items.order_id')
      .join('variants', 'order_items.variant_id', 'variants.id');

    return orderItems;
  } catch (error) {
    return { ...error, message: error.message };
  }
};

module.exports = {
  getOrderItemsByUserId,
};
