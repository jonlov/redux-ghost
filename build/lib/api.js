'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constructUrl = function constructUrl(path, params) {
  var queryParams = _qs2.default.stringify(_extends({}, params, {
    key: _config.contentKey
  }));

  return _config.host + '/ghost/api/v2' + path + '?' + queryParams;
};

var checkStatus = function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;

  throw error;
};

var parseJson = function parseJson(response) {
  return response.json();
};

var request = exports.request = function request(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var url = constructUrl(path, options);

  return fetch(url, options).then(checkStatus).then(parseJson);
};