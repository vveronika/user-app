import { UsersStateType, UsersActions } from '../../models/types';
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_FAILED,
} from '../actionTypes';

const initialState: UsersStateType = {
  users: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      const payload = action.payload;
      return {
        ...state,
        users: state.users.concat(payload),
        loading: false,
        fetchError: false,
      };
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        fetchError: false,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        fetchError: true,
      };
    default:
      return state;
  }
};

export default reducer;
