"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kittenHandler = require("../models/kittenHandler");

var _kittenHandler2 = _interopRequireDefault(_kittenHandler);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KittenController = function () {
    function KittenController() {
        _classCallCheck(this, KittenController);

        this.KittenHandler = new _kittenHandler2.default();
    }

    _createClass(KittenController, [{
        key: "index",
        value: function index(req, res) {

            res.render('kitten', {
                Kittens: this.KittenHandler.getKittens()
            });
        }
    }, {
        key: "getKittens",
        value: function getKittens(req, res) {

            this.KittenHandler.getKittens().then(function (result) {
                res.json(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: "getKitten",
        value: function getKitten(req, res) {
            var id = req.params.id;

            this.KittenHandler.getKitten(id).then(function (result) {
                res.json(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: "postKitten",
        value: function postKitten(req, res) {
            var param = req.body;

            this.KittenHandler.postKitten(param.name, param.color, param.primaryQuality, param.primaryDefault, param.kibbles, param.secondQuality).then(function (result) {
                res.json(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: "putKitten",
        value: function putKitten(req, res) {
            var param = req.body;

            var array = {
                name: !_underscore2.default.isEmpty(param.name) ? param.name : null,
                color: !_underscore2.default.isEmpty(param.color) ? param.color : null,
                primaryQuality: !_underscore2.default.isEmpty(param.primaryQuality) ? param.primaryQuality : null,
                primaryDefault: !_underscore2.default.isEmpty(param.primaryDefault) ? param.primaryDefault : null,
                kibbles: !_underscore2.default.isEmpty(param.kibbles) ? param.kibbles : null,
                secondQuality: !_underscore2.default.isEmpty(param.secondQuality) ? param.secondQuality : null
            };

            this.KittenHandler.putKitten(param.id, array).then(function (result) {
                return res.json(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: "killKitten",
        value: function killKitten(req, res) {
            this.KittenHandler.killKitten(req.body.id).then(function (result) {
                res.json(result);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }]);

    return KittenController;
}();

exports.default = KittenController;