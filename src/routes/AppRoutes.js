import React from 'react';
import { Switch } from 'react-router-dom';
import ContainerRoutes from './ContainerRoutes';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ForgetPassword from '../pages/forgot-password/ForgotPassword';
import RecoverPassword from '../pages/recover-password/RecoverPassword';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import PublicRoute from '../helpers/routes/PublicRoute';

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/login">
        <Login />
      </PublicRoute>
      <PublicRoute exact path="/register">
        <Register />
      </PublicRoute>
      <PublicRoute exact path="/forgot-password">
        <ForgetPassword />
      </PublicRoute>
      <PublicRoute exact path="/recover-password">
        <RecoverPassword />
      </PublicRoute>
      <PublicRoute exact path="/privacy-policy">
        <PrivacyPolicy />
      </PublicRoute>
      <ContainerRoutes />
    </Switch>
  );
};
export default AppRoutes;
