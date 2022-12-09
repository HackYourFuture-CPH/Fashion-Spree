const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const reviewsController = require('../controllers/reviews.controller');

/**
 * @swagger
 * /reviews:
 *  get:
 *    tags:
 *    - reviews
 *    summary: Get all reviews or reviews with specific ProductId
 *    description:
 *      Will return an array with all reviews as objects or will return all reviews for specific productId.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: productId
 *       schema:
 *         type: number
 *         required: false
 *       description: The product id of the reviews to get
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  if (req.query.productId) {
    reviewsController
      .getReviewsByProductId(req.query.productId)
      .then((result) => res.json(result))
      .catch(next);
  }
  reviewsController
    .getAllReviews()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
