const express = require('express');

const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controllers');

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - exampleResources
 *    summary: Get all users
 *    description:
 *      Will return all users.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
