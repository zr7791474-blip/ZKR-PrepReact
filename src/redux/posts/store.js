import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import * as type from "./postsType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

// Reducer - PDF page 307
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_POSTS_REQUEST:
      return { loading: true, data: [], error: "" };
    case type.FETCH_POSTS_SUCCESS:
      return { loading: false, data: action.payload.posts, error: "" };
    case type.FETCH_POSTS_FAILURE:
      return { loading: false, data: [], error: action.payload.error };
    default:
      return state;
  }
};

export default function createPostsStore() {
  const composeEnhancers =
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
}
