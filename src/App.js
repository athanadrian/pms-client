import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import './App.scss';
import initStore from './store/index';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider, useAuth } from './providers/AuthProvider';
import { MapProvider } from './providers/MapProvider';

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: 'top-right',
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnVisibilityChange: true,
  pauseOnHover: true
});
const store = initStore();

const Providers = ({ children }) => (
  <Provider store={store}>
    <AuthProvider>
      <MapProvider mapApiKey="SIlt2xeksYttvmGq6dPvF4YaSmYwNI9q">
        {children}
      </MapProvider>
    </AuthProvider>
  </Provider>
);

const PmsApp = () => {
  const authService = useAuth();
  useEffect(() => {
    authService.checkAuthState();
  }, [authService]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const App = () => (
  <Providers>
    <PmsApp />
  </Providers>
);

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default App;
