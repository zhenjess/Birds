import { RECEIVE_ITEMS } from '../actions/items_actions';

const itemsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState;
    switch(action.type) {
        case RECEIVE_ITEMS:
            newState = Object.assign({}, oldState, action.payload.items); 
            return newState;   
        default:
            return oldState;
    }
};

export default itemsReducer;