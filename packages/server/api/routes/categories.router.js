const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const categoriesController = require('../controllers/categories.controller');

/**
 * @swagger
 * /categories:
 *  get:
 *    tags:
 *    - categories
 *    summary: Get all product categories
 *    description:
 *      Will return all categories of product.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: category
 *       schema:
 *         type: string
 *         required: false
 *       description: get product categories
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  categoriesController
    .getCategories()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
