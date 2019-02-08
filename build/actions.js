'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('isomorphic-fetch');

var _api = require('./lib/api');

var _utils = require('./lib/utils');

var _actionTypes = require('./action-types');

var pending = function pending(type) {
  return {
    type: type,
    status: 'loading'
  };
};

var success = function success(type, data) {
  return {
    type: type,
    status: 'success',
    data: data
  };
};

var fail = function fail(type, error) {
  return {
    type: type,
    status: 'error',
    error: error
  };
};

var getData = function getData(type, uri, options) {
  return function (dispatch) {
    dispatch(pending(type));

    return (0, _api.request)(uri, options).then(function (data) {
      return dispatch(success(type, data));
    }).catch(function (error) {
      return dispatch(fail(type, error));
    });
  };
};

// Posts
var getPosts = function getPosts(options) {
  return getData(_actionTypes.GET_POSTS, '/posts/', options);
};
var getPost = function getPost(id, options) {
  if (!(0, _utils.isId)(id)) {
    return fail(_actionTypes.GET_POST, 'Invalid Id');
  }

  return getData(_actionTypes.GET_POST, '/posts/' + id + '/', options);
};

// Pages
var getPage = function getPage(id, options) {
  if (!(0, _utils.isId)(id)) {
    return fail(_actionTypes.GET_POST, 'Invalid Id');
  }

  return getData(_actionTypes.GET_POST, '/pages/' + id + '/', options);
};

// Tags
var getTags = function getTags(options) {
  return getData(_actionTypes.GET_TAGS, '/tags/', options);
};
var getTag = function getTag(id, options) {
  if (!(0, _utils.isId)(id)) {
    return fail(_actionTypes.GET_TAG, 'Invalid Id');
  }

  return getData(_actionTypes.GET_TAG, '/tags/' + id + '/', options);
};

// Users
var getUsers = function getUsers(options) {
  return getData(_actionTypes.GET_USERS, '/users/', options);
};
var getUser = function getUser(id, options) {
  if (!(0, _utils.isId)(id)) {
    return fail(_actionTypes.GET_USER, 'Invalid Id');
  }

  return getData(_actionTypes.GET_USER, '/users/' + id + '/', options);
};

var reset = function reset() {
  return {
    type: _actionTypes.RESET
  };
};

exports.default = {
  getPosts: getPosts,
  getPost: getPost,
  getPage: getPage,
  getTags: getTags,
  getTag: getTag,
  getUsers: getUsers,
  getUser: getUser,
  reset: reset,
  getData: getData
};