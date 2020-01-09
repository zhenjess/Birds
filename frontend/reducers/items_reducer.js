import { RECEIVE_ITEMS } from '../actions/items_actions';
import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const itemsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState;
    switch(action.type) {
        case RECEIVE_ITEMS:
            newState = Object.assign({}, oldState, action.items); 
            return newState;  
        case RECEIVE_ALL_SHOES:
            newState = Object.assign({}, oldState, action.payload.items);
            return newState;  
        default:
            return oldState;
    }
};

export default itemsReducer;