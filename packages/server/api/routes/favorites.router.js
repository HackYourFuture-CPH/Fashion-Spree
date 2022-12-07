const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const favoritesController = require('../controllers/favorites.controller');

/**
 * @swagger
 * /favorites:
 *  get:
 *    tags:
 *    - favorites
 *    summary: Get all product favorites
 *    description:
 *      Will return all favorites of product.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  favoritesController
    .getFavorites()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /favorites:
 *  post:
 *    tags:
 *    - favorites
 *    summary: Create a favorites
 *    description:
 *      Will create a favorites.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: favorites
 *        description: The favorites to create.
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *            - product_id
 *            - created_at
 *          properties:
 *            user_id:
 *              type: number
 *            product_id:
 *              type: number
 *            created_at:
 *              type: date/time
 *    responses:
 *      201:
 *        description: Favorites created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  favoritesController
    .createFavorites(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /favorites/{ID}:
 *  delete:
 *    tags:
 *    - favorites
 *    summary: Delete an favorites
 *    description:
 *      Will delete a favorites with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the favorites to delete.
 *    responses:
 *      200:
 *        description: favorites deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  favoritesController
    .deleteFavorites(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the favorites id does not exist
      if (result === 0) {
        res.status(404).send('The favorites ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
});

module.exports = router;
