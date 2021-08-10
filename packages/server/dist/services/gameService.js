"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prisma = require('../utils/Prisma.js');

var GameService = function GameService() {
  _classCallCheck(this, GameService);
};

_defineProperty(GameService, "getAllGames", function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    return Prisma.games.findMany(params);
  } catch (e) {
    throw new Error("GameService Error: ".concat(e.message));
  }
});

_defineProperty(GameService, "getGame", function (id) {
  try {
    return Prisma.games.findUnique({
      where: {
        gameId: id
      }
    });
  } catch (e) {
    throw new Error("GameService Error: ".concat(e.message));
  }
});

module.exports = GameService;