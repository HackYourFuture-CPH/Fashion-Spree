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
 *    summary: Get all products or products with Specific category
 *    description:
 *      Will return all products or products with Specific category .
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: category
 *       schema:
 *         type: string
 *         required: false
 *       description: The category of the products to get
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  if (req.query.category) {
    productsController
      .getProductsByCategory(req.query.category)
      .then((result) => res.json(result))
      .catch(next);
  } else {
    productsController
      .getProducts()
      .then((result) => res.json(result))
      .catch(next);
  }
});
/**
 * @swagger
 * /products/search:
 *  get:
 *    tags:
 *    - products
 *    summary: Get all product Name Search
 *    description:
 *      Will return all products Search by Name.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: searchText
 *       schema:
 *         type: string
 *         required: false
 *       description: The product Search by Name
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/search', (req, res, next) => {
  productsController
    .getProductBySearch(req.query.searchText, res)
    .then((result) => res.json(result))
    .catch((error) => {
      next(error);
    });
});

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
 *         required: flase
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
