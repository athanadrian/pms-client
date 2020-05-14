/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ApiError = ({ errors }) => {
  if (errors && errors.length) {
    return (
      <div className="alert alert-danger">
        {errors.map(({ message }, i) => (
          <p key={i}>{message}</p>
        ))}
      </div>
    );
  }
  return null;
};

// ApiError.propTypes = {
//   errors:
//   ]).isRequired
// };

export default ApiError;
