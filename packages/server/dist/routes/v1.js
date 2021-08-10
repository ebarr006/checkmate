"use strict";

var express = require('express');

var UserController = require('../controllers/userController.js');

var GameController = require('../controllers/gameController.js');

var router = express.Router(); // CREATE, READ, UPDATE, DESTROY

router.get('/users', UserController.getUsers);
router.get('/users/:userId', UserController.getUser);
router.get('/games', GameController.getGames);
router.get('/games/:gameId', GameController.getGame);
module.exports = router;