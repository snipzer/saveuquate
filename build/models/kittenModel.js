'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Kittens = new Schema({
    name: { type: String, required: true, unique: true },
    color: { type: String, required: true },
    primaryQuality: { type: String, required: true },
    secondQuality: { type: String, required: false },
    primaryDefault: { type: String, required: true },
    kibbles: { type: String, required: true },
    isAvailable: { type: Boolean, required: true }
});

module.exports = _mongoose2.default.model('Kittens', Kittens);