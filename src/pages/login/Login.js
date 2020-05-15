import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import LoginForm from '../../components/forms/LoginForm';
import ApiError from '../../components/forms/ApiError';
import { withAuth } from '../../providers/AuthProvider';

const Login = ({ auth, location: { state } }) => {
  const { message } = state || '';
  const [isRedirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState([]);

  const loginByAuth = (data) => {
    auth
      .loginByAuth(data)
      .then(() => {
        setRedirect(true);
        toast.success('You have logged in Successfully!');
      })
      .catch((errs) => {
        setErrors(errs);
        errs.map((e) => toast.error(e.message) || 'Failed');
      });
  };

  if (isRedirect) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <div className="container pms-container">
      <div className="pms-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Login</h1>
            {message && <div className="alert alert-success">{message}</div>}
            <LoginForm handleOnSubmit={loginByAuth} />
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
            <p className="mb-1">
              <Link
                to="/forgot-password"
                className="text-center btn btn-pms-main btn-block"
              >
                I forgot my password
              </Link>
            </p>
            <p className="mb-0 ml-auto">
              <Link
                to="/register"
                className="text-center btn btn-pms-main btn-block"
              >
                Register a new account
              </Link>
            </p>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">
                Hundreds of awesome places in reach of few clicks.
              </h2>
              <img src="/img/login-image.jpg" alt="Login an user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    loginByAuth: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      message: PropTypes.string.isRequired
    })
  })
};

Login.defaultProps = {
  location: {
    state: ''
  }
};

export default withAuth(Login);
