import { User } from './user';

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

export type UsersActions =
  | FetchUsersSuccessAction
  | FetchUsersFailedAction
  | FetchUsersAction;
