"use strict";

var express = require('express');

var v1 = require('./routes/v1.js');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;
app.use('/api/v1', v1);
app.use(cors());
app.listen(port, function () {
  console.log("Checkmate server listening at http://localhost:".concat(port));
});
app.get('/', function (req, res) {
  res.send('Server Onlineee');
});