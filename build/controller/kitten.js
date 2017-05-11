'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KittenController = function () {
    function KittenController() {
        _classCallCheck(this, KittenController);
    }

    _createClass(KittenController, [{
        key: 'index',
        value: function index(req, res) {

            res.render('kitten');
        }
    }, {
        key: 'getKittens',
        value: function getKittens(req, res) {}
    }, {
        key: 'getKitten',
        value: function getKitten(req, res) {}
    }, {
        key: 'postKitten',
        value: function postKitten(req, res) {}
    }, {
        key: 'putKitten',
        value: function putKitten(req, res) {}
    }, {
        key: 'killKitten',
        value: function killKitten(req, res) {}
    }]);

    return KittenController;
}();

exports.default = KittenController;