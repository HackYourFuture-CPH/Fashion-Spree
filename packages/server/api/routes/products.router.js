const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsController = require('../controllers/products.controller');

/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - products
 *    summary: Get all products or products with Specific category or Search products by name
 *    description:
 *      Will return all products or products with Specific category or Will return all products where the name matches the search input .
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: category
 *       schema:
 *         type: string
 *         required: false
 *       description: The category of the products to get
 *     - in: query
 *       name: search
 *       schema:
 *         type: string
 *         required: false
 *       description: Search products by name
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  const { token } = req.headers;
  if (req.query.category) {
    productsController
      .getProductsByCategory(
        token,
        req.query.category,
        req.query.limit,
        req.query.offset,
      )
      .then((result) => res.json(result))
      .catch(next);
  } else if (req.query.search) {
    productsController
      .getProductBySearch(req.query.search, res)
      .then((result) => res.json(result))
      .catch((error) => {
        next(error);
      });
  } else {
    try {
      productsController
        .getProducts(token)
        .then((result) => res.json(result))
        .catch(next);
    } catch (error) {
      res.status(404).json({ error: 'Bad Get Request' });
    }
  }
});
// TODO: refactor products router and controller CLASS22-66

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
 *         required: false
 *         description: The ID of the product to get
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  productsController
    .getProductById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
