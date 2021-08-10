var UserService = require('../services/userService.js');

class UserController {
  static getUsers = async (req, res, next) => {
    try {
      const users = await UserService.getAllUsers();
      res.send(users);
    } catch(e) {
      console.log(e.message);
      res.sendStatus(500);
    }
  }

  static getUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const user = await UserService.getUser(userId);
      res.send(user);
    } catch(e) {
      console.log(e.message);
      res.sendStatus(500);
    }
  }
};

module.exports = UserController;