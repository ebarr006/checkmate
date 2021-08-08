"use strict";

var _express = _interopRequireDefault(require("express"));

var _client = _interopRequireDefault(require("@prisma/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PrismaClient = _client["default"].PrismaClient;
var prisma = new PrismaClient();
var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Server Onlineee');
}); // 503ebf03-a186-4440-8480-641a09d961ce - emilio
// 542e2d91-1aad-4b54-9d69-cd2571d6bf1d - jasmine

app.get('/users', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.users.findMany({
              where: {
                username: 'emilio'
              },
              include: {
                games_games_winner_idTousers: true
              }
            });

          case 2:
            users = _context.sent;
            res.json(users);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/add-game', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var game;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return prisma.games.create({
              data: {
                winner_id: '503ebf03-a186-4440-8480-641a09d961ce',
                loser_id: '542e2d91-1aad-4b54-9d69-cd2571d6bf1d',
                num_moves: 9
              }
            });

          case 2:
            game = _context2.sent;
            res.json(game);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get('/games', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var games;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return prisma.games.findMany({});

          case 2:
            games = _context3.sent;
            res.json(games);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});