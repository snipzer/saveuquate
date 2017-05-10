"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kittenModel = require("./kittenModel");

var _kittenModel2 = _interopRequireDefault(_kittenModel);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kittenHandler = function () {
    function kittenHandler() {
        _classCallCheck(this, kittenHandler);

        this.KittenModel = _kittenModel2.default;
    }

    _createClass(kittenHandler, [{
        key: "getKittens",
        value: function getKittens() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.KittenModel.find({}).then(function (kittens) {
                    return resolve(kittens);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }
    }, {
        key: "getKitten",
        value: function getKitten(id) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.KittenModel.findOne({ "_id": id }).then(function (result) {
                    return resolve(result);
                }).catch(function (e) {
                    return reject(e);
                });
            });
        }
    }, {
        key: "postKitten",
        value: function postKitten(name, color, primaryQuality, primaryDefault, kibbles) {
            var _this3 = this;

            var secondQuality = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

            return new Promise(function (resolve, reject) {
                _this3.KittenModel.create({
                    name: name,
                    color: color,
                    primaryQuality: primaryQuality,
                    secondQuality: secondQuality,
                    primaryDefault: primaryDefault,
                    kibbles: kibbles,
                    isAvailable: true

                }).then(function (result) {
                    return resolve(result);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }
    }, {
        key: "putKitten",
        value: function putKitten(id, array) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.getKitten(id).then(function (kitten) {
                    if (!_underscore2.default.isNull(array.name)) kitten.name = array.name;

                    if (!_underscore2.default.isNull(array.color)) kitten.color = array.color;

                    if (!_underscore2.default.isNull(array.primaryQuality)) kitten.primaryQuality = array.primaryQuality;

                    if (!_underscore2.default.isNull(array.primaryDefault)) kitten.primaryDefault = array.primaryDefault;

                    if (!_underscore2.default.isNull(array.kibbles)) kitten.kibbles = array.kibbles;

                    if (!_underscore2.default.isNull(array.secondQuality)) kitten.secondQuality = array.secondQuality;

                    kitten.save();
                    resolve(kitten);
                }).catch(function (e) {
                    return reject(e);
                });
            });
        }
    }, {
        key: "killKitten",
        value: function killKitten(id) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
                _this5.KittenModel.remove({ '_id': id }).then(function (result) {
                    return resolve(result);
                }).catch(function (e) {
                    return reject(e);
                });
            });
        }
    }]);

    return kittenHandler;
}();

exports.default = kittenHandler;