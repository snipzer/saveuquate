'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var yaml_config = require('node-yaml-config');

var mongooseHandler = function mongooseHandler() {
    var _this = this;

    _classCallCheck(this, mongooseHandler);

    this.mongoose = _mongoose2.default;
    this.config = yaml_config.load('config/config.yml');

    this.mongoose.connect('mongodb://' + this.config.dbConfig.host + ':' + this.config.dbConfig.port + '/' + this.config.dbConfig.dbName, function (err) {
        if (err) console.log(err);else {
            console.log("Mongoose connected");
            _this.isConnected = true;
        }
    });
};

exports.default = mongooseHandler;