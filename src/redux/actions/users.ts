import * as actionTypes from '../actionTypes';
import { User } from '../../models/user';
import { API_URL } from 'helpers/constants';
import { httpGet } from 'helpers/apiHelpers';

// Action to show loader while fetching data
function loadUsers() {
  return {
    type: actionTypes.FETCH_USERS,
  };
}

// Fetching users actions
function fetchUsers() {
  return (dispatch: Function) => {
    dispatch(() => dispatch(loadUsers()));
    setTimeout(() => {
      httpGet(`${API_URL}/users`)
        .then((res: any) => dispatch(fetchUsersSuccess(res)))
        .catch(() => dispatch(fetchUsersFailed(true)));
    }, 1000);
  };
}

function fetchUsersFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
    failed,
  };
}

function fetchUsersSuccess(payload: User[]) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload,
  };
}

export { fetchUsers };
