import Prisma from '../utils/Prisma.js';

class UserService {
  static getAllUsers = (params = {}) => {
    try {
      return Prisma.users.findMany(params);
    } catch (e) {
      throw new Error(`UserService Error: ${e.message}`);
    }
  }

  static getUser = id => {
    try {
      return Prisma.users.findUnique({
        where: {
          userId: id
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

export default UserService;
