import * as ActionTypes from '../actions';

const renters = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_RENTERS:
      return action.renters;
    default:
      return state;
  }
};

export default renters;
