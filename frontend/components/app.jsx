import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/login_form_container';

import NavBarContainer from './navbar/navbar_container';

import Main from './main/main_container';


const App = () => (
    <div>
        <Switch>
            <Route exact path="/login" component={SessionFormContainer}/>
        </Switch>/>
    </div>
);

export default App;