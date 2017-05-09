'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Kittens = new Schema({
    name: { type: String, required: true, unique: true },
    color: { type: String },
    race: { type: String }
});

module.exports = _mongoose2.default.model('Kittens', Kittens);