import {
    FETCH_ALL_SHOES,
    FETCH_SHOE
} from '../actions/shoes_actions';

const shoesReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let shoe;

    switch(action.type) {
        case FETCH_ALL_SHOES:
            return Object.assign({}, oldState, action.shoes);
        case FETCH_SHOE:
            shoe = action.payload.shoes;

            const newShoe = { [action.shoe.id]: action.shoe };

            return Object.assign({}, oldState, newShoe);
        default:
            return oldState;
    }
};

export default shoesReducer;