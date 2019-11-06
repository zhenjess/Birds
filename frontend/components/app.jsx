import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';

import NavBarContainer from './navbar/navbar_container';

import Main from './main/main_container';

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/session" component={SessionFormContainer}/>
        </Switch>/>
    </div>
);

export default App;