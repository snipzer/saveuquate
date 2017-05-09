"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require("config");

var _config2 = _interopRequireDefault(_config);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _kittenModel = require("./kittenModel");

var _kittenModel2 = _interopRequireDefault(_kittenModel);

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var kittenHandler = function (_Mongoose) {
    _inherits(kittenHandler, _Mongoose);

    function kittenHandler(methodName) {
        _classCallCheck(this, kittenHandler);

        var _this = _possibleConstructorReturn(this, (kittenHandler.__proto__ || Object.getPrototypeOf(kittenHandler)).call(this));

        _this.dbConfig = _config2.default.get('Config.dbConfig');
        _this.KittenModel = _kittenModel2.default;

        _this.init(methodName);
        return _this;
    }

    _createClass(kittenHandler, [{
        key: "init",
        value: function init(methodName) {
            var _this2 = this;

            this.connect("mongodb://" + this.dbConfig.host + ":" + this.dbConfig.port + "/" + this.dbConfig.dbName, function (err) {
                if (err) console.log(err);else console.log("Mongoose connected");

                return _this2.getMethod(methodName)();
            });
        }
    }, {
        key: "getMethod",
        value: function getMethod(methodName) {
            switch (methodName) {
                case "getKittens":
                    return this.getKittens;
                    break;
                case "getKitten":
                    return this.getKitten;
                    break;
                case "postKitten":
                    return this.postKitten;
                    break;
                case "putKitten":
                    return this.putKitten;
                    break;
                case "killKitten":
                    return this.killKitten;
                    break;
                default:
                    return undefined;
            }
        }
    }, {
        key: "getKittens",
        value: function getKittens() {
            this.KittenModel.find({}).then(function (kittens) {
                return console.log(kittens);
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: "getKitten",
        value: function getKitten() {}
    }, {
        key: "postKitten",
        value: function postKitten() {}
    }, {
        key: "putKitten",
        value: function putKitten() {}
    }, {
        key: "killKitten",
        value: function killKitten() {}
    }]);

    return kittenHandler;
}(_mongoose2.default);

exports.default = kittenHandler;