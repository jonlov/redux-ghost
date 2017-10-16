'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('./action-types');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialData = { data: null, error: null, loading: false, meta: null };

var initialState = {
  posts: initialData,
  post: initialData,
  tags: initialData,
  tag: initialData,
  users: initialData,
  user: initialData
};

var createStateHandler = function createStateHandler(state, action) {
  return function (key) {
    var isSingle = !(key.substr(key.length - 1) === 's');

    var statusHandlers = {
      error: function error() {
        return _extends({}, state, _defineProperty({}, key, _extends({}, state[key], {
          data: null,
          error: action.error || 'Unknown Error',
          loading: false
        })));
      },
      loading: function loading() {
        return _extends({}, state, _defineProperty({}, key, _extends({}, state[key], {
          loading: true,
          error: null
        })));
      },
      success: function success() {
        return _extends({}, state, _defineProperty({}, key, _extends({}, state[key], {
          data: isSingle ? action.data[isSingle ? key + 's' : key][0] : action.data[isSingle ? key + 's' : key],
          meta: action.data.meta || null,
          error: null,
          loading: false
        })));
      }
    };

    return statusHandlers[action.status] ? statusHandlers[action.status]() : state;
  };
};

var reducer = function reducer(state, action) {
  var _reducers;

  if (typeof state === 'undefined') {
    return initialState;
  }

  var updateKey = createStateHandler(state, action);

  var reducers = (_reducers = {}, _defineProperty(_reducers, _actionTypes.GET_POSTS, function () {
    return updateKey('posts');
  }), _defineProperty(_reducers, _actionTypes.GET_POST, function () {
    return updateKey('post');
  }), _defineProperty(_reducers, _actionTypes.GET_TAGS, function () {
    return updateKey('tags');
  }), _defineProperty(_reducers, _actionTypes.GET_TAG, function () {
    return updateKey('tag');
  }), _defineProperty(_reducers, _actionTypes.GET_USERS, function () {
    return updateKey('users');
  }), _defineProperty(_reducers, _actionTypes.GET_USER, function () {
    return updateKey('user');
  }), _defineProperty(_reducers, _actionTypes.RESET, function () {
    return _extends({}, initialState);
  }), _reducers);

  return reducers[action.type] ? reducers[action.type]() : state;
};

exports.default = reducer;