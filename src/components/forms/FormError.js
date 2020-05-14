/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const FormError = ({ children, errors, name }) => {
  const error = errors[name] || null;

  if (!error) {
    return null;
  }

  return (
    <div className="alert alert-danger" children={children(error.message)} />
  );
};

FormError.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  name: PropTypes.string.isRequired
};

export default FormError;
