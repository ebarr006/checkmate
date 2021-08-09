import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

class GameService {
  static getAllGames = (params = {}) => {
    try {
      return prisma.games.findMany(params);
    } catch (e) {
      throw new Error(`GameService Error: ${e.message}`);
    }
  }

  static getGame = (id) => {
    try {
      return prisma.games.findUnique({
        where: {
          gameId: id
        }
      });
    } catch (e) {
      throw new Error(`GameService Error: ${e.message}`);
    }
  }
}

export default GameService;