import * as actionTypes from '../actionTypes';
import { Post } from '../../models/post';
import { API_URL } from 'helpers/constants';
import { httpGet } from 'helpers/apiHelpers';

// Action to show loader while fetching data
function loadPosts() {
  return {
    type: actionTypes.FETCH_POSTS,
  };
}

// Fetching posts actions
function fetchPosts(userId: number) {
  return (dispatch: Function) => {
    dispatch(() => dispatch(loadPosts()));
    setTimeout(() => {
      httpGet(`${API_URL}/posts?userId=${userId}`)
        .then((res: any) => dispatch(fetchPostsSuccess(res)))
        .catch(() => dispatch(fetchPostsFailed(true)));
    }, 1000);
  };
}

function fetchPostsFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_POSTS_FAILED,
    failed,
  };
}

function fetchPostsSuccess(payload: Post[]) {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload,
  };
}

export { fetchPosts };
