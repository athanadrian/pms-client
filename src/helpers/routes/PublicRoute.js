import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const PublicRoute = ({ children, ...rest }) => {
  const authService = useAuth();
  const onlyChild = React.Children.only(children);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authService.isAuthenticated() ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )}
    />
  );
};

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PublicRoute;
