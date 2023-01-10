const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// get order with status "created" by user-id
const getOrdersByUserId = async (token) => {
  const userUid = token.split(' ')[1];
  const user = (await knex('users').where({ uid: userUid }))[0];
  if (!user) {
    throw new HttpError('User not found', 401);
  }
  try {
    const orders = await knex('orders')
      .select(
        'order_items.order_id',
        'order_items.variant_id',
        'products.name',
        'products.price',
        knex.raw('SUM(order_items.quantity) as quantity'),
      )
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
      .andWhere('orders.user_id', `${user.id}`)
      .groupBy('order_items.order_id', 'order_items.variant_id');

    return orders;
  } catch (error) {
    return error.message;
  }
};

// delete order item from order
const deleteOrder = async (authorization, query) => {
  const userUid = authorization.split(' ')[1];
  const user = (await knex('users').where({ uid: userUid }))[0];
  if (!user) {
    throw new HttpError('User not found', 401);
  }

  const { orderId, variantId } = query;

  if (!orderId || !variantId) {
    throw new HttpError('please enter ID to delete your order item.', 400);
  }
  try {
    const deletedOrderItem = knex('order_items')
      .where({
        'order_items.order_id': orderId,
        'order_items.variant_id': variantId,
      })
      .del();
    if (deletedOrderItem === 0) {
      throw new HttpError(
        'The order item ID you provided does not exist.',
        404,
      );
    } else {
      return deletedOrderItem;
    }
  } catch (error) {
    return error.message;
  }
};

// get order with status "created" by user-id
const addOrderItemsByUserId = async (authorization, body) => {
  try {
    const userUid = authorization.split(' ')[1];
    const user = (await knex('users').where({ uid: userUid }))[0];
    if (!user) {
      throw new HttpError('User not found', 401);
    }

    const { product_id: productId, color, size, quantity } = body;

    if (!productId && !color && !size && !quantity) {
      throw new HttpError('Wrong product parameters', 400);
    }

    let [order] = await knex('orders').where({
      user_id: user.id,
      status: 'created',
    });

    if (!order) {
      const orderId = await knex('orders').insert({
        user_id: user.id,
        status: 'created',
      });

      [order] = await knex('orders').where({
        id: orderId,
      });
    }

    const [variant] = await knex('variants').where({
      product_id: productId,
      color,
      size,
    });

    if (!variant) {
      throw new HttpError('Variant is not available', 404);
    }

    const [productsInQueue] = await knex
      .select(
        'order_items.variant_id',
        knex.raw('SUM(order_items.quantity) as quantity'),
      )
      .from('order_items')
      .where({
        order_id: order.id,
        variant_id: variant.id,
      })
      .groupBy('order_items.variant_id');

    const availableProducts = variant.stock - productsInQueue.quantity;

    if (quantity > availableProducts) {
      throw new HttpError(
        'Order products quantity is bigger than stock quantity',
        400,
      );
    } else {
      await knex('order_items').insert({
        order_id: order.id,
        variant_id: variant.id,
        quantity,
      });
    }

    return {
      successful: true,
    };
  } catch (error) {
    return { ...error, message: error.message };
  }
};

module.exports = {
  getOrdersByUserId,
  addOrderItemsByUserId,
  deleteOrder,
};
