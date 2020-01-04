import { RECEIVE_ITEMS } from '../actions/items_actions';
import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const itemsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState;
    switch(action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.items;
        case RECEIVE_ITEMS:
            newState = Object.assign({}, oldState, action.items); 
            return newState;   
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};

export default itemsReducer;