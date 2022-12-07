const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const variantsController = require('../controllers/variants.controller');

/**
 * @swagger
 * /variants/{productId}:
 *  get:
 *    tags:
 *    - variants
 *    summary: Get variants by productId
 *    description:
 *      Will return All variants with a matching productId.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: productId
 *       schema:
 *         type: integer
 *         required: true
 *         description: The productId of the variants to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:productId', (req, res, next) => {
  variantsController
    .getVariantsByProductId(req.params.productId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
