import React from 'react';

import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const shoeColorsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.shoeColors;
        default: 
            return state;
    }
};

export default shoeColorsReducer;