"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kittenHandler = function () {
    function kittenHandler() {
        _classCallCheck(this, kittenHandler);

        this.KittenModel = _mongoose2.default.model.getCollectionName("Kittens");
    }

    _createClass(kittenHandler, [{
        key: "getKittens",
        value: function getKittens() {
            return this.KittenModel.find({}).then(function (kittens) {
                return console.log(kittens);
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: "getKitten",
        value: function getKitten(name) {
            return this.KittenModel.findOne({ "name": name }).then(function (result) {
                return console.log(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: "postKitten",
        value: function postKitten(name, color, primaryQuality, primaryDefault, kibbles) {
            var secondQuality = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

            return this.KittenModel.create({
                name: name,
                color: color,
                primaryQuality: primaryQuality,
                secondQuality: secondQuality,
                primaryDefault: primaryDefault,
                kibbles: kibbles,
                isAvailable: true

            }).then(function (result) {
                return console.log(result);
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: "putKitten",
        value: function putKitten(id) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var primaryQuality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var primaryDefault = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var kibbles = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var secondQuality = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

            return this.KittenModel.update({
                "id": ObjectId(id)
            }, {
                $set: {
                    "name": name,
                    "color": color,
                    "primaryQuality": primaryQuality,
                    "primaryDefault": primaryDefault,
                    "kibbles": kibbles,
                    "secondQuality": secondQuality
                }
            });
        }
    }, {
        key: "killKitten",
        value: function killKitten(id) {
            return this.KittenModel.remove({ 'id': ObjectId(id) }).then(function (result) {
                return console.log(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }]);

    return kittenHandler;
}();

exports.default = kittenHandler;