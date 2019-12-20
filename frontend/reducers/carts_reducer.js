import { 
    POST_TO_CART, 
    REMOVE_FROM_CART 
} from '../actions/cart_actions';

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState;
    switch(action.type) {
        case POST_TO_CART:
            newState = Object.assign({}, oldState, action.item);
            return newState;
        case REMOVE_FROM_CART:
            newState = Object.assign({}, oldState);
            delete newState[`${action.id}-${action.size}`];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default: 
            return oldState;
    }
};

export default cartReducer;