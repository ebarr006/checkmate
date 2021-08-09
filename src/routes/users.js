import express from 'express';
import UserController from '../controllers/usersController.js';

const users = express.Router();

users.get('/users', UserController.getUsers);
users.get('/users/:id', UserController.getUser);

export default users;