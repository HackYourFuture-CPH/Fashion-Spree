const express = require('express');

const router = express.Router({ mergeParams: true });
const favoritesController = require('../controllers/favorites.controller');

/**
 * @swagger
 * /favorites:
 *  get:
 *    tags:
 *    - favorites
 *    summary: Get all product's favorites
 *    description:
 *      Will return all favorites of product.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: false
 *         description: The favorites of the user to get
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  const userId = 3;
  // TO DO : once we will add authentication I will update it
  favoritesController
    .getFavoritesByUserId(userId)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /favorites:
 *  post:
 *    tags:
 *    - favorites
 *    summary: Create a favorite
 *    description:
 *      Will create a favorite.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: favorites
 *        description: The favorite to create.
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *            - product_id
 *          properties:
 *            user_id:
 *              type: number
 *            product_id:
 *              type: number
 *            created_at:
 *              type: date/time
 *    responses:
 *      201:
 *        description: Favorite created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  favoritesController
    .createFavorites(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /favorites/{ID}:
 *  delete:
 *    tags:
 *    - favorites
 *    summary: Delete an favorite
 *    description:
 *      Will delete a favorite with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        description: ID of the favorite to delete.
 *    responses:
 *      200:
 *        description: favorite deleted
 *      5XX:
 *        description: Unexpected error.
 */

router.delete('/:id', (req, res, next) => {
  favoritesController
    .deleteFavorites(req.params.id, req)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
