var Prisma = require('../utils/Prisma.js');

class UserService {
  static getAllUsers = (params = {}) => {
    try {
      return Prisma.users.findMany(params);
    } catch (e) {
      throw new Error(`UserService Error: ${e.message}`);
    }
  }

  static getUser = userId => {
    try {
      return Prisma.users.findUnique({
        where: {
          userId
        },
        include: {
          gamesWon: true
        }
      });
    } catch (e) {
      throw new Error(`UserService Error: ${e.message}`);
    }
  }
  
};

module.exports = UserService;
