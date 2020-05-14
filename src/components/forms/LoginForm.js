import React from 'react';
import PropTypes from 'prop-types';

import { useForm, ErrorMessage } from 'react-hook-form';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ handleOnSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          ref={register({
            required: true,
            pattern: EMAIL_PATTERN
          })}
        />
        {errors.email && (
          <div className="alert alert-danger">
            {errors.email.type === 'required' && <div>Email is required.</div>}
            {errors.email.type === 'pattern' && (
              <div>Must be valid email format!</div>
            )}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          ref={register({
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
        />

        <ErrorMessage errors={errors} name="password">
          {({ message }) => <p className="alert alert-danger">{message}</p>}
        </ErrorMessage>
        {/* {errors.password && (
          <div className="alert alert-danger">
            {errors.password.type === 'required' && (
              <span>Password is required</span>
            )}
            {errors.password.type === 'minLength' && (
              <span>Password must be at least 6 characters</span>
            )}
          </div>
        )} */}
      </div>
      <button type="submit" className="btn btn-pms-main">
        Submit
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

export default LoginForm;
