import React from 'react';

import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions'; //import action type

const shoeMaterialsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.shoeMaterials;
        default:
            return state;
    }
};

export default shoeMaterialsReducer;