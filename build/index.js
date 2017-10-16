'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.actions = undefined;

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO: Not sure if this is the best way to export.

exports.default = {
  config: _config.config,
  actions: _actions2.default,
  reducer: _reducer2.default
};
exports.actions = _actions2.default;
exports.reducer = _reducer2.default;