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

module.exports = router;
