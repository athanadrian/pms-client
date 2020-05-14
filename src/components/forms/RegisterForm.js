import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { sameAs } from '../../helpers/validators';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterForm = ({ handleOnSubmit }) => {
  const { register, handleSubmit, errors, getValues } = useForm();

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="username"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.username && (
          <div className="alert alert-danger">
            {errors.username.type === 'required' && (
              <span>Username is required</span>
            )}
            {errors.username.type === 'minLength' && (
              <span>Username must be at least 5 characters</span>
            )}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
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
          type="password"
          name="password"
          className="form-control"
          id="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && (
          <div className="alert alert-danger">
            {errors.password.type === 'required' && (
              <span>Password is required</span>
            )}
            {errors.password.type === 'minLength' && (
              <span>Password must be at least 6 characters</span>
            )}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          className="form-control"
          id="passwordConfirm"
          ref={register({
            required: true,
            minLength: 6,
            validate: { sameAs: sameAs('password', getValues) }
          })}
        />
        {errors.passwordConfirm && (
          <div className="alert alert-danger">
            {errors.passwordConfirm.type === 'required' && (
              <span>Password confirmation is required</span>
            )}
            {errors.passwordConfirm.type === 'minLength' && (
              <span>Password confirmation must be at least 6 characters</span>
            )}
            {errors.passwordConfirm.type === 'sameAs' && (
              <span>Password confirmation should match with password</span>
            )}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-pms-main">
        Submit
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

export default RegisterForm;
