"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = require('config');

var mongooseHandler = function mongooseHandler() {
    var _this = this;

    _classCallCheck(this, mongooseHandler);

    this.mongoose = _mongoose2.default;
    this.dbConfig = Config.dbConfig;
    console.log(this.dbConfig);
    this.mongoose.connect("mongodb://" + this.dbConfig.host + ":" + this.dbConfig.port + "/" + this.dbConfig.dbName, function (err) {
        if (err) console.log(err);else {
            console.log("Mongoose connected");
            _this.isConnected = true;
        }
    });
};

exports.default = mongooseHandler;