import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignupFormContainer from './session/signup_form_container';

import LoginFormContainer from './session/login_form_container';

import LogoutFormContainer from './session/logout_form_container';

// import Account from './session/account';

import NavBarContainer from './navbar/navbar_container';

import Main from './main/main_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Switch>
            {/* <Route exact path="/account" component={Account}/> */}
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute />
            <Route exact path="/signup" component={SignupFormContainer}/>
            <Route exact path="/login" component={LoginFormContainer}/>
            <Route exact path="/logout" component={LogoutFormContainer}/>

        </Switch>
    </div>
);

export default App;