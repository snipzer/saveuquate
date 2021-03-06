"use strict";

var _mongooseHandler = require("./models/mongooseHandler");

var _mongooseHandler2 = _interopRequireDefault(_mongooseHandler);

var _server = require("./server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _server2.default();

var mongoose = new _mongooseHandler2.default();

server.setPort();

server.run();