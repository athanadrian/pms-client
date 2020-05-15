/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ApiError = ({ errors }) => {
  if (errors && errors.length) {
    return (
      <div className="alert alert-danger">
        {errors.map(({ message }) => (
          <p key={message}>{message}</p>
        ))}
      </div>
    );
  }
  return null;
};

ApiError.propTypes = {
  errors: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func.isRequired
  }).isRequired
};

export default ApiError;
