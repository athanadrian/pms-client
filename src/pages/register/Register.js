import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RegisterForm from '../../components/forms/RegisterForm';
import ApiError from '../../components/forms/ApiError';
import { registerUser } from '../../actions';

const PmsRegister = () => {
  const [isRedirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState([]);

  const registerByAuth = (data) => {
    registerUser(data)
      .then(() => {
        setRedirect(true);
      })
      .catch((errs) => {
        setErrors(errs);
      });
  };

  if (isRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { message: 'You have been successfully registered!' }
        }}
      />
    );
  }

  return (
    <div className="container pms-container">
      <div className="pms-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Register</h1>
            <RegisterForm handleOnSubmit={registerByAuth} />
            <ApiError errors={errors} />
            <div className="form-group">
              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="/" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" />
                  Sign up using Facebook
                </a>
                <a href="/" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" />
                  Sign up using Google+
                </a>
              </div>
            </div>
            <Link
              to="/login"
              className="text-center btn btn-pms-main btn-block"
            >
              I already have an account
            </Link>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">
                As our member you have access to most awesome places in the
                world.
              </h2>
              <img src="/img/register-image.jpg" alt="Register an user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PmsRegister;
