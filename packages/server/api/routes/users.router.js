const express = require('express');

const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *    - users
 *    summary: Create a user
 *    description:
 *      Will create a favorite.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: users
 *        description: The user to create.
 *        schema:
 *          type: object
 *          required:
 *            - full_name
 *            - email
 *            - uid
 *          properties:
 *            full_name:
 *              type: string
 *            email:
 *              type: string
 *            uid:
 *              type: string
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  usersController
    .createUsers(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
