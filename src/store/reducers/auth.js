import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

const initAuthReducer = () => {
  const isAuth = (state = false, action) => {
    switch (action.type) {
      case ActionTypes.USER_AUTHENTICATED:
        return true;
      case ActionTypes.USER_LOGOUT:
        return false;
      default:
        return state;
    }
  };

  const username = (state = '', action) => {
    switch (action.type) {
      case ActionTypes.USER_AUTHENTICATED:
        return action.username;
      case ActionTypes.USER_LOGOUT:
        return '';
      default:
        return state;
    }
  };

  return combineReducers({ isAuth, username });
};

const rental = initAuthReducer();

export default rental;
