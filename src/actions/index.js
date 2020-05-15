import axios from '../utils/axios';
import { ownersData, rentersData } from '../dev-data/data';
import * as ActionTypes from '../store/actions';

// HANDLING API ERRORS

export const handleApiErrors = (resError) => {
  const errors = [
    {
      status: 'fail',
      message: 'Oooops Something went wrong!'
    }
  ];
  if (resError && resError.data) {
    errors.push(resError.data);
  }
  return errors;
};

// AUTH ACTIONS

export const registerUser = (registerData) => {
  return axios
    .post('/auth/register', registerData)
    .catch((error) => Promise.reject(handleApiErrors(error.response || {})));
};

export const loginUser = (loginData) => {
  return axios
    .post('/auth/login', loginData)
    .then((res) => res.data)
    .catch((error) => Promise.reject(handleApiErrors(error.response || {})));
};

export const userAuthenticated = (decodedToken) => {
  return {
    type: ActionTypes.USER_AUTHENTICATED,
    username: decodedToken.username || ''
  };
};

// RENTALS ACTIONS

export const fetchRentals = () => (dispatch) => {
  // promise then
  axios.get('/rentals').then((response) => {
    const rentals = response.data.data.data;
    dispatch({
      type: ActionTypes.FETCH_RENTALS,
      rentals
    });
  });
};

// RENTAL ACTIONS

export const createRental = (rental) => {
  return {
    type: ActionTypes.CREATE_RENTAL,
    rental
  };
};

export const fetchRentalById = (rentalId) => async (dispatch) => {
  dispatch({
    type: ActionTypes.IS_FETCHING_RENTAL
  });
  // promise async-await
  const response = await axios.get(`/rentals/${rentalId}`);
  dispatch({
    type: ActionTypes.FETCH_RENTAL_BY_ID,
    rental: response.data.data.data
  });
};

export const unMountRental = () => {
  return {
    type: ActionTypes.UNMOUNT_RENTAL,
    rental: {}
  };
};

export const fetchRenters = () => {
  return {
    type: ActionTypes.FETCH_RENTERS,
    renters: rentersData
  };
};
export const fetchOwners = () => {
  return {
    type: ActionTypes.FETCH_OWNERS,
    owners: ownersData
  };
};
