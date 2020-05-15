import axios from 'axios';
// import store from '../store/index';
// import * as ActionTypes from '../store/actions';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_GATEKEEPER_URL}`
});

// axios.interceptors.request.use(
//   (request) => {
//     console.log('axiosState', store.getState());
//     const { token } = store.getState().auth;
//     console.log('axios', token);
//     if (token) {
//       request.headers.authorization = `Bearer ${token}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.data.status === 401) {
//       store.dispatch({ type: ActionTypes.LOGOUT_USER });
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
