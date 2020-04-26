import reducer from 'redux/reducers/users';
import * as actions from 'redux/actionTypes';
import expect from 'expect';
import { UsersActions } from 'models/types';
import { FetchedUsersArray, UsersInitialState } from 'tests/test-mocks';

describe('users reducer', () => {
  it('should handle FETCH_USERS', () => {
    const action: UsersActions = {
      type: actions.FETCH_USERS,
      loading: false,
    };
    expect(reducer(UsersInitialState, action)).toEqual(UsersInitialState);
  });

  it('should handle FETCH_USERS_SUCCESS', () => {
    const action: UsersActions = {
      type: actions.FETCH_USERS_SUCCESS,
      payload: FetchedUsersArray,
      loading: false,
    };
    expect(reducer(UsersInitialState, action)).toEqual({
      users: FetchedUsersArray,
      loading: false,
      fetchError: false,
    });
  });

  it('should handle FETCH_USERS_FAILED', () => {
    const action: UsersActions = {
      type: actions.FETCH_USERS_FAILED,
      fetchError: true,
      loading: false,
    };
    expect(reducer(UsersInitialState, action)).toEqual({
      users: [],
      loading: false,
      fetchError: true,
    });
  });
});
