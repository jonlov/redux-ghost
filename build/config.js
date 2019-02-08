"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var host = exports.host = null; // .e.g 'http://localhost:2368',
var contentKey = exports.contentKey = null; // .e.g 'ghost-frontend',

var config = exports.config = function config() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  exports.host = host = options.host;
  exports.contentKey = contentKey = options.contentKey;
};