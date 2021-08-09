import express from 'express';
import UserController from '../controllers/userController.js';
import GameController from '../controllers/gameController.js';

const router = express.Router();

// CREATE, READ, UPDATE, DESTROY

router.get('/users', UserController.getUsers);
router.get('/users/:userId', UserController.getUser);

router.get('/games', GameController.getGames);
router.get('/games/:gameId', GameController.getGame);

export default router;
