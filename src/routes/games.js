import express from 'express';
import UserController from '../controllers/gamesController.js';

const users = express.Router();

users.get('/games', UserController.getGames);
users.get('/games/:id', UserController.getGame);

export default users;