"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _mongooseHandler = require("./models/mongooseHandler");

var _mongooseHandler2 = _interopRequireDefault(_mongooseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//const mongoose = new mongooseHandler();

app.set('view engine', 'twig');
app.set('views', _path2.default.join(__dirname, '../src/views/'));

app.get('/', function (req, res) {
    res.render('base.twig');
});

app.listen(3000, function () {
    return console.log("connected on port 3000");
});