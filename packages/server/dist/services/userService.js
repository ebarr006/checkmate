"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prisma = require('../utils/Prisma.js');

var UserService = function UserService() {
  _classCallCheck(this, UserService);
};

_defineProperty(UserService, "getAllUsers", function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    return Prisma.users.findMany(params);
  } catch (e) {
    throw new Error("UserService Error: ".concat(e.message));
  }
});

_defineProperty(UserService, "getUser", function (userId) {
  try {
    return Prisma.users.findUnique({
      where: {
        userId: userId
      },
      include: {
        gamesWon: true
      }
    });
  } catch (e) {
    throw new Error("UserService Error: ".concat(e.message));
  }
});

;
module.exports = UserService;