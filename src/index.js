import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GithubProvider}  from "./hooks/userGithub";


ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
    <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


