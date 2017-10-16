"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var host = exports.host = null; // .e.g 'http://localhost:2368',
var clientId = exports.clientId = null; // .e.g 'ghost-frontend',
var clientSecret = exports.clientSecret = null; // .e.g '4837a41df11b',

var config = exports.config = function config() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  exports.host = host = options.host;
  exports.clientId = clientId = options.clientId;
  exports.clientSecret = clientSecret = options.clientSecret;
};