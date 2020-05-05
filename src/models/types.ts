import { User } from './user';
import { Post } from './post';

// users state type
export interface UsersStateType {
  users: User[];
  loading: boolean;
  fetchError: boolean;
}
// users actions types
interface FetchUsersAction {
  type: 'FETCH_USERS';
  loading: boolean;
}

interface FetchUsersSuccessAction {
  type: 'FETCH_USERS_SUCCESS';
  payload: User[];
  loading: boolean;
}

interface FetchUsersFailedAction {
  type: 'FETCH_USERS_FAILED';
  loading: boolean;
  fetchError: boolean;
}

interface ReturnInitialUsersStateAction {
  type: 'RETURN_INITIAL_STATE_ACTION';
  payload: User[];
  loading: boolean;
  fetchError: boolean;
}

export type UsersActions =
  | FetchUsersSuccessAction
  | FetchUsersFailedAction
  | FetchUsersAction
  | ReturnInitialUsersStateAction;


// posts state type
export interface PostsStateType {
  posts: Post[];
  loading: boolean;
  fetchError: boolean;
}
// posts actions types
interface FetchPostsAction {
  type: 'FETCH_POSTS';
  loading: boolean;
}

interface FetchPostsSuccessAction {
  type: 'FETCH_POSTS_SUCCESS';
  payload: Post[];
  loading: boolean;
}

interface FetchPostsFailedAction {
  type: 'FETCH_POSTS_FAILED';
  loading: boolean;
  fetchError: boolean;
}

interface ReturnInitialPostsStateAction {
  type: 'RETURN_INITIAL_POSTS_STATE_ACTION';
  payload: User[];
  loading: boolean;
  fetchError: boolean;
}

export type PostsActions =
  | FetchPostsSuccessAction
  | FetchPostsFailedAction
  | FetchPostsAction
  | ReturnInitialPostsStateAction;

