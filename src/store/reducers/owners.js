import * as ActionTypes from '../actions';

const owners = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_OWNERS:
      return action.owners;
    default:
      return state;
  }
};

export default owners;
