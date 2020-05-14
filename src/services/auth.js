import axios from '../utils/axios';
import config from '../config';
import {
  addGoogleScript,
  addFacebookScript
} from '../utils/social-auth-scripts';

const asyncGoogleGetAuthInstance = () => {
  return new Promise((resolve, reject) => {
    addGoogleScript()
      .then(() => {
        const params = {
          client_id: config.GOOGLE_OAUTH_CLIENT_ID,
          scope: 'openid profile email',
          cookie_policy: 'single_host_origin',
          fetch_basic_profile: true
        };

        window.gapi.load('auth2', () => {
          if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(params);
          }
          resolve(window.gapi.auth2.getAuthInstance().signIn());
        });
      })
      .catch(() => reject(new Error('ADD_SCRIPT_ERROR')));
  });
};

const asyncFacebookGetLoginStatus = () => {
  return new Promise((resolve, reject) => {
    addFacebookScript()
      .then(() => {
        const params = {
          appId: config.FACEBOOK_OAUTH_CLIENT_ID,
          cookie: false,
          xfbml: false,
          version: 'v3.2'
        };
        window.FB.init(params);
        window.FB.getLoginStatus((data) => {
          if (data.status === 'connected') {
            resolve(data.authResponse.accessToken);
          } else if (
            data.status === 'not_authorized' ||
            data.status === 'unknown'
          ) {
            console.log('problem');
          } else resolve(null);
        });
      })
      .catch(() => reject(new Error('ADD_SCRIPT_ERROR')));
  });
};

const asyncFacebookLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (data) => {
        if (data.status === 'connected') {
          resolve(data.authResponse.accessToken);
        }
        reject(new Error('FACEBOOK_ERROR'));
      },
      { scope: 'email' }
    );
  });
};

export const loginByAuth = (email, password) => {
  return axios
    .post('/auth/login', {
      email,
      password
    })
    .then((response) => {
      console.log('responseLogin', response.data.token);
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('login-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve(response.data.token);
    });
};

export const loginByGoogle = () => {
  return asyncGoogleGetAuthInstance()
    .then(
      (res) => {
        const basicProfile = res.getBasicProfile();
        const data = {};
        data.uid = basicProfile.getId();
        data.auth = res.getAuthResponse();
        return axios.post('/auth/google/login', {
          idToken: data.auth.id_token
        });
      },
      (err) => Promise.reject(err)
    )
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('login-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve(response.data.token);
    });
};

export const loginByFacebook = () => {
  return asyncFacebookGetLoginStatus()
    .then((accessToken) => {
      if (accessToken) {
        return Promise.resolve(accessToken);
      }
      return asyncFacebookLogin();
    })
    .then((accessToken) => {
      return axios.post('/auth/facebook/login', {
        accessToken
      });
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('login-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve(response.data.token);
    });
};
export const registerByAuth = (username, email, password, passwordConfirm) => {
  console.log('register');
  return axios
    .post('/auth/register', {
      username,
      email,
      password,
      passwordConfirm
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('register-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve(response.data.token);
    });
};

export const registerByGoogle = () => {
  return asyncGoogleGetAuthInstance()
    .then(
      (res) => {
        const basicProfile = res.getBasicProfile();
        const data = {};
        data.uid = basicProfile.getId();
        data.auth = res.getAuthResponse();
        return axios.post('/auth/google/register', {
          idToken: data.auth.id_token
        });
      },
      (err) => Promise.reject(err)
    )
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('register-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve(response.data.token);
    });
};

export const registerByFacebook = () => {
  return asyncFacebookGetLoginStatus()
    .then((accessToken) => {
      if (accessToken) {
        return Promise.resolve(accessToken);
      }
      return asyncFacebookLogin();
    })
    .then((accessToken) => {
      return axios.post('/auth/facebook/register', {
        accessToken
      });
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('register-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve(response.data.token);
    });
};
