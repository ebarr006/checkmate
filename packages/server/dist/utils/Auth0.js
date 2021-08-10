"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressOpenidConnect = require("express-openid-connect");

var config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET_KEY,
  baseURL: 'http://localhost:3000',
  clientID: process.env.AUTH0_PROJECT_KEY,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

var _default = (0, _expressOpenidConnect.auth)(config);

exports["default"] = _default;