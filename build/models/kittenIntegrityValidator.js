"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kittenIntegrityValidator = function () {
    function kittenIntegrityValidator() {
        _classCallCheck(this, kittenIntegrityValidator);

        this.val = _validator2.default;
        this.status = {
            ok: 200,
            created: 201,
            noContent: 204,
            badRequest: 400,
            unauthorized: 401,
            forbidden: 403,
            notFound: 404,
            methodNotAllowed: 405,
            internalServerError: 500
        };
    }

    _createClass(kittenIntegrityValidator, [{
        key: "getStatus",
        value: function getStatus() {
            return this.status;
        }
    }, {
        key: "checkId",
        value: function checkId(id) {
            var error = false;
            if (!this.val.isAlphanumeric(id) || id.length !== 24) error = true;

            return error;
        }
    }, {
        key: "checkString",
        value: function checkString(stringArray) {
            var _this = this;

            var error = false;

            stringArray.forEach(function (el) {
                if (!_this.val.isAlpha(el)) error = true;
            });

            return error;
        }
    }]);

    return kittenIntegrityValidator;
}();

exports.default = kittenIntegrityValidator;