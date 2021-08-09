import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

class UserService {
  static getAllUsers = (params = {}) => {
    try {
      return prisma.users.findMany(params);
    } catch (e) {
      throw new Error(`UserService Error: ${e.message}`);
    }
  }

  static getUser = id => {
    try {
      return prisma.users.findUnique({
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
