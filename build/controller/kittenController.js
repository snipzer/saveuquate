"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kittenHandler = require("../models/kittenHandler");

var _kittenHandler2 = _interopRequireDefault(_kittenHandler);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _kittenIntegrityValidator = require("../models/kittenIntegrityValidator");

var _kittenIntegrityValidator2 = _interopRequireDefault(_kittenIntegrityValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KittenController = function () {
    function KittenController() {
        _classCallCheck(this, KittenController);

        this.KittenHandler = new _kittenHandler2.default();
        this.kIV = new _kittenIntegrityValidator2.default();
        this.status = this.kIV.getStatus();
    }

    _createClass(KittenController, [{
        key: "index",
        value: function index(req, res) {

            res.render('kitten', {
                Kittens: this.KittenHandler.getKittens()
            });
        }
    }, {
        key: "showAll",
        value: function showAll(req, res) {
            res.render('showAll');
        }
    }, {
        key: "showNonAdopted",
        value: function showNonAdopted(req, res) {
            res.render('showNonAdopted');
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
            var _this = this;

            var param = req.body;

            var array = {
                name: param.name,
                color: param.color,
                primaryQuality: param.primaryQuality,
                primaryDefault: param.primaryDefault,
                kibbles: param.kibbles,
                secondQuality: !_underscore2.default.isEmpty(param.secondQuality) ? param.secondQuality : null
            };

            if (this.kIV.checkArrayString(array)) {
                this.KittenHandler.postKitten(array).then(function (result) {
                    res.status(_this.status.ok).json(result);
                }).catch(function (e) {
                    return console.log(e);
                });
            } else {
                res.status(this.status.internalServerError).json({ message: "Oopps something gone wrong" });
            }
        }
    }, {
        key: "putKitten",
        value: function putKitten(req, res) {
            var _this2 = this;

            var param = req.body;

            var array = {
                name: !_underscore2.default.isEmpty(param.name) ? param.name : null,
                color: !_underscore2.default.isEmpty(param.color) ? param.color : null,
                primaryQuality: !_underscore2.default.isEmpty(param.primaryQuality) ? param.primaryQuality : null,
                primaryDefault: !_underscore2.default.isEmpty(param.primaryDefault) ? param.primaryDefault : null,
                kibbles: !_underscore2.default.isEmpty(param.kibbles) ? param.kibbles : null,
                secondQuality: !_underscore2.default.isEmpty(param.secondQuality) ? param.secondQuality : null
            };

            if (this.kIV.checkArrayString(array)) {
                this.KittenHandler.putKitten(param.id, array).then(function (result) {
                    return res.status(_this2.status.ok).json(result);
                }).catch(function (e) {
                    return console.log(e);
                });
            } else {
                res.status(this.status.internalServerError).json({ message: "Oopps something gone wrong" });
            }
        }
    }, {
        key: "killKitten",
        value: function killKitten(req, res) {
            var _this3 = this;

            if (!this.kIV.checkId(req.body.id)) {
                this.KittenHandler.killKitten(req.body.id).then(function (result) {
                    res.status(_this3.status.ok).json(result);
                }).catch(function (e) {
                    return console.log(e);
                });
            } else {
                res.status(this.status.internalServerError).json({ message: "Oopps something gone wrong" });
            }
        }
    }]);

    return KittenController;
}();

exports.default = KittenController;