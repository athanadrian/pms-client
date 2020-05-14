import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import rentalsReducer from './reducers/rentals/rentals';
import rentalReducer from './reducers/rentals/rental';
import rentersReducer from './reducers/renters';
import ownersReducer from './reducers/owners';

// const addPromiseToDispatch = (store) => {
//   const { dispatch } = store;

//   return (action) => {
//     if (action.then && typeof action.then === 'function') {
//       return action.then(dispatch);
//     }
//     return dispatch(action);
//   };
// };

// const addThunkToDispatch = (store) => {
//   const { dispatch } = store;

//   return (action) => {
//     if (typeof action === 'function') {
//       return action(dispatch);
//     }
//     return dispatch(action);
//   };
// };

const initStore = () => {
  const reducers = combineReducers({
    auth: authReducer,
    rentals: rentalsReducer,
    rental: rentalReducer,
    renters: rentersReducer,
    owners: ownersReducer
  });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  // store.dispatch = addPromiseToDispatch(store);
  // store.dispatch = addThunkToDispatch(store);

  return store;
};
export default initStore;
