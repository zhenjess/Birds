//React
import React from "react";
import ReactDOM from "react-dom";
// import * as APIUtil from './util/session_api_util';
//Components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: { 
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.fetchAllShoes = fetchAllShoes;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root); 
});

