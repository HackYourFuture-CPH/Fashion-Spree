const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

/**
 * @swagger
 * /orders:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get all orders for user
 *    description:
 *      Will return an array with all orders for a specific user.
 *    produces: application/json
 *    parameters:
 *     - in: header
 *       name: token
 *       schema:
 *         type: string
 *         required: true
 *         description: The user id to get orders for
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      400:
 *        description: Token is wrong
 *      401:
 *        description: You are not authenticated
 *      404:
 *        description: User was not found
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  const { token } = req.headers;

  ordersController
    .getOrderItemsByUserId(token)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
