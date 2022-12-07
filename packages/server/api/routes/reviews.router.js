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

module.exports = router;
