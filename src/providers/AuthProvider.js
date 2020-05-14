import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import * as ActionTypes from '../store/actions';
import { loginUser, userAuthenticated } from '../actions';

const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {
  const decodeToken = (token) => {
    return jwt.decode(token);
  };

  const getToken = () => {
    return localStorage.getItem('pms_token');
  };

  const getExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  };

  const isTokenValid = (decodedToken) => {
    return decodeToken && moment().isBefore(getExpiration(decodedToken));
  };

  const checkAuthState = () => {
    const token = getToken();
    const decodedToken = decodeToken(token);
    if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch(userAuthenticated(decodedToken));
    }
  };

  const loginByAuth = (data) => {
    return loginUser(data).then(({ token }) => {
      localStorage.setItem('pms_token', token);
      const decodedToken = decodeToken(token);
      dispatch(userAuthenticated(decodedToken));
      return token;
    });
  };

  const logout = () => {
    localStorage.removeItem('pms_token');
    dispatch({ type: ActionTypes.USER_LOGOUT });
  };

  const isAuthenticated = () => {
    const decodedToken = decodeToken(getToken());
    return decodedToken && isTokenValid(decodedToken);
  };

  const authApi = {
    loginByAuth,
    checkAuthState,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>
  );
};

AuthBaseProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const withAuth = (Component) => (props) => (
  <AuthContext.Consumer>
    {(authApi) => <Component {...props} auth={authApi} />}
  </AuthContext.Consumer>
);
