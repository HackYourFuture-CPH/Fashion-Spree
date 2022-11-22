const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsContoller = require('../controllers/products.controller');

/**
 * @swagger
 * /products/{ID}:
 *  get:
 *    tags:
 *    - products
 *    summary: Get product by ID
 *    description:
 *      Will return single product with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the product to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  productsContoller
    .getProductById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
