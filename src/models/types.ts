import { User } from './user';

// users state type
export interface UsersStateType {
  users: User[];
  loading: boolean;
  error: boolean;
}
// users actions types
interface FetchUsersAction {
  type: 'FETCH_USERS';
  fetchError: boolean;
}

interface FetchUsersSuccessAction {
  type: 'FETCH_USERS_SUCCESS';
  payload: User[];
}

interface FetchUsersFailedAction {
  type: 'FETCH_USERS_FAILED';
  payload: User[];
}

export type UsersActions =
  | FetchUsersSuccessAction
  | FetchUsersFailedAction
  | FetchUsersAction;
