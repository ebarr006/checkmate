import GameService from '../services/gameService.js';

class GameController {
  static getGames = async (req, res, next) => {
    try {
      const games = await GameService.getAllGames();
      res.send(games);
    } catch(e) {
      console.log(e.message);
      res.sendStatus(500);
    }
  }

  static getGame = async (req, res, next) => {
    const { id } = req.params;
    try {
      const game = await GameService.getGame(id);
      res.send(game);
    } catch(e) {
      console.log(e.message);
      res.sendStatus(500);
    }
  }
};

export default GameController;