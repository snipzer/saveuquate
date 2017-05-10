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
}();

exports.default = kittenHandler;