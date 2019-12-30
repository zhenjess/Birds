import { RECEIVE_ITEMS } from '../actions/items_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const itemsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ITEMS:
            return Object.assign({}, oldState, action.payload.items);    
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};

export default itemsReducer;