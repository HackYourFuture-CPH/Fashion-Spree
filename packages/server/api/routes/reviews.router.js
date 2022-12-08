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
 *    summary: Get all reviews
 *    description:
 *      Will return all reviews.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  reviewsController
    .getAllReviews()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /reviews/{productId}:
 *  get:
 *    tags:
 *    - reviews
 *    summary: Get reviews by productId
 *    description:
 *      Will return All reviews for the matching productId.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: productId
 *       schema:
 *         type: integer
 *         required: true
 *         description: The productId of the reviews to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:productId', (req, res, next) => {
  reviewsController
    .getReviewsByProductId(req.params.productId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
