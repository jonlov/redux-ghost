import {
  GET_POSTS,
  GET_POST,
  GET_POST_SLUG,
  GET_PAGES,
  GET_PAGE,
  GET_PAGE_SLUG,
  GET_TAGS,
  GET_TAG,
  GET_TAG_SLUG,
  GET_USERS,
  GET_USER,
  GET_USER_SLUG,
  GET_SETTINGS,
  RESET
} from "./action-types";

const initialData = { data: null, error: null, loading: false, meta: null };

const initialState = {
  posts: initialData,
  post: initialData,
  pages: initialData,
  page: initialData,
  tags: initialData,
  tag: initialData,
  users: initialData,
  user: initialData,
  settings: initialData
};

const createStateHandler = (state, action) => key => {
  const isSingle = !(key.substr(key.length - 1) === "s");

  const statusHandlers = {
    error: () => ({
      ...state,
      [key]: {
        ...state[key],
        data: null,
        error: action.error || "Unknown Error",
        loading: false
      }
    }),
    loading: () => ({
      ...state,
      [key]: {
        ...state[key],
        loading: true,
        error: null
      }
    }),
    success: () => ({
      ...state,
      [key]: {
        ...state[key],
        data: isSingle
          ? action.data[isSingle ? `${key}s` : key][0]
          : action.data[isSingle ? `${key}s` : key],
        meta: action.data.meta || null,
        error: null,
        loading: false
      }
    })
  };

  return statusHandlers[action.status]
    ? statusHandlers[action.status]()
    : state;
};

const reducer = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  const updateKey = createStateHandler(state, action);

  const reducers = {
    [GET_POSTS]: () => updateKey("posts"),
    [GET_POST]: () => updateKey("post"),
    [GET_POST_SLUG]: () => updateKey("post"),
    [GET_PAGES]: () => updateKey("pages"),
    [GET_PAGE]: () => updateKey("page"),
    [GET_PAGE_SLUG]: () => updateKey("page"),
    [GET_TAGS]: () => updateKey("tags"),
    [GET_TAG]: () => updateKey("tag"),
    [GET_TAG_SLUG]: () => updateKey("tag"),
    [GET_USERS]: () => updateKey("users"),
    [GET_USER]: () => updateKey("user"),
    [GET_USER_SLUG]: () => updateKey("user"),
    [GET_SETTINGS]: () => updateKey("settings"),
    [RESET]: () => ({
      ...initialState
    })
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default reducer;
