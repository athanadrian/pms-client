import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const icons = {
  facebook: 'fab fa-facebook',
  google: 'fab fa-google',
  googlePlus: 'fab fa-google-plus',
  add: 'fas fa-plus',
  edit: 'far fa-edit'
};

const AppButton = (props) => {
  const {
    children,
    isLoading,
    icon,
    theme,
    disabled,
    className,
    ...otherProps
  } = props;

  let spinnerTemplate;
  let iconTemplate;

  if (isLoading) {
    spinnerTemplate = (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
  }

  if (icon && icons[icon]) {
    iconTemplate = <i className={`${icons[icon]} mr-2`} />;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <Button
      {...otherProps}
      variant={theme}
      disabled={isLoading || disabled}
      className={className}
    >
      {iconTemplate}
      {children}
      {spinnerTemplate}
    </Button>
  );
};

AppButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isLoading: PropTypes.bool,
  icon: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

AppButton.defaultProps = {
  isLoading: false,
  icon: null,
  theme: 'primary',
  disabled: false,
  className: ''
};

export default AppButton;
