import { combineReducers } from 'redux';
import * as ActionTypes from '../../actions';

const initRentalReducer = () => {
  const item = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.UNMOUNT_RENTAL:
        return {};
      case ActionTypes.FETCH_RENTAL_BY_ID:
        return action.rental;
      default:
        return state;
    }
  };

  const isFetchingRental = (state = false, action) => {
    switch (action.type) {
      case ActionTypes.IS_FETCHING_RENTAL:
        return true;
      case ActionTypes.FETCH_RENTAL_BY_ID:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({ item, isFetchingRental });
};

const rental = initRentalReducer();

export default rental;
