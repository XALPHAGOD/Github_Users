import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProviderComp } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-39w4twe9.us.auth0.com
// 9a5dWZ8Dim0pLZ0M6v4haWwoAdL2Z3wx

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-39w4twe9.us.auth0.com"
    clientId="9a5dWZ8Dim0pLZ0M6v4haWwoAdL2Z3wx"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    >
      <GithubProviderComp>
        <App />
      </GithubProviderComp>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();