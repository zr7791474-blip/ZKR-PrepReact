import axios from "axios";
import * as type from "./postsType";

// Créateurs d'actions - PDF page 306
export const fetchPostsRequest = () => ({
  type: type.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: type.FETCH_POSTS_SUCCESS,
  payload: { posts: posts },
});

export const fetchPostsFailure = (err) => ({
  type: type.FETCH_POSTS_FAILURE,
  payload: { error: err },
});

// Fonction thunk - PDF pages 304 et 306
export const fetchPosts = function () {
  return function (dispatch, getState) {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => dispatch(fetchPostsSuccess(response.data)))
      .catch((err) => dispatch(fetchPostsFailure(err.message)));
  };
};
