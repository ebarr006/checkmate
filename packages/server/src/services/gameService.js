var Prisma = require('../utils/Prisma.js');

class GameService {
  static getAllGames = (params = {}) => {
    try {
      return Prisma.games.findMany(params);
    } catch (e) {
      throw new Error(`GameService Error: ${e.message}`);
    }
  }

  static getGame = (id) => {
    try {
      return Prisma.games.findUnique({
        where: {
          gameId: id
        }
      });
    } catch (e) {
      throw new Error(`GameService Error: ${e.message}`);
    }
  }
}

module.exports = GameService;