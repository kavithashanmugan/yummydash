import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Provider store={store}>
  <Auth0Provider
  domain="dev-mlxkwbtruscyfbve.us.auth0.com"
  clientId="QWOluch4GoXhaCXb4u9sLV7RazTQxc4z"
  scope="openid profile email"
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience:"yummydashapi"
  }}
>
  <App />
</Auth0Provider>
</Provider>
</React.StrictMode>,
);

