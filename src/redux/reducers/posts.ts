import { PostsStateType, PostsActions } from '../../models/types';
import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_FAILED,
} from '../actionTypes';

const initialState: PostsStateType = {
  posts: [],
  loading: false,
  fetchError: false,
};

const reducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
        fetchError: false,
      };
    case FETCH_POSTS_SUCCESS:
      const payload = action.payload;
      return {
        ...state,
        posts: state.posts.concat(payload),
        loading: false,
        fetchError: false,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        fetchError: true,
      };
    default:
      return state;
  }
};

export default reducer;
