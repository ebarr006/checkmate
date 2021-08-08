"use strict";

var _postgresMigrations = require("postgres-migrations");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function dbInit() {
  return _dbInit.apply(this, arguments);
}

function _dbInit() {
  _dbInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var dbConfig;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dbConfig = {
              database: "checkmate",
              user: "admin",
              password: "123123",
              host: "localhost",
              port: 5432,
              // Default: false for backwards-compatibility
              // This might change!
              ensureDatabaseExists: true,
              // Default: "postgres"
              // Used when checking/creating "database-name"
              defaultDatabase: "postgres"
            }; // await postgresMigrations.migrate(dbConfig, "../migrations")

            _context.next = 3;
            return (0, _postgresMigrations.migrate)(dbConfig, "migrations");

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dbInit.apply(this, arguments);
}

dbInit();