"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kittenHandler = require('./models/kittenHandler');

var app = (0, _express2.default)();

var kittens = kittenHandler("getKittens");

console.log(kittens);
app.listen(3000, function () {
  return console.log("connected on port 3000");
});