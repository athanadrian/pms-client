import * as ActionTypes from '../../actions';

const rentals = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_RENTALS:
      return action.rentals;
    case ActionTypes.CREATE_RENTAL:
      return [action.rental, ...state];
    default:
      return state;
  }
};
export default rentals;
