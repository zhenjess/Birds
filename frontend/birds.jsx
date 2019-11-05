import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from './util/session_api_util';
// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    window.login = APIUtil.login;
    window.signup = APIUtil.signup;
    window.logout = APIUtil.logout;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Birds</h1>, root); 
});
