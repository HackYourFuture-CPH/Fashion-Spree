const express = require('express');

const router = express.Router({ mergeParams: true });
const ordersController = require('../controllers/orders.controller');
/**
 * @swagger
 * /orders:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get orders
 *    description:
 *      Will return all orders with status "created" for current user.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  const { token } = req.headers;

  ordersController
    .getOrdersByUserId(token)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /orders:
 *  post:
 *    tags:
 *    - orders
 *    summary: Post order items
 *    description:
 *      Add order item to order for specific user.
 *    produces: application/json
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *          required: true
 *          description: The user id to get orders for
 *      - in: body
 *        name: orders
 *        description: The favorite to create.
 *        schema:
 *          type: object
 *          required:
 *            - product_id
 *            - color
 *            - size
 *            - quantity
 *          properties:
 *            product_id:
 *              type: number
 *            color:
 *              type: string
 *            size:
 *              type: string
 *            quantity:
 *              type: number
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res, next) => {
  const { authorization } = req.headers;

  ordersController
    .addOrderItemsByUserId(authorization, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
