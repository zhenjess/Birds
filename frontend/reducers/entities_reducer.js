import { combineReducers } from "redux";

import usersReducer from './users_reducer';

import shoesReducer from './shoes_reducer';

import materialsReducer from './materials_reducer';

import colorsReducer from './colors_reducer';

import shoeOptionsReducer from './shoe_options_reducer';

import itemsReducer from './items_reducer';

import cartsReducer from './carts_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    shoes: shoesReducer, 
    materials: materialsReducer, 
    colors: colorsReducer,
    shoeOptions: shoeOptionsReducer,
    items: itemsReducer, 
    carts: cartsReducer
});

export default entitiesReducer; //represents data from db and manages it
//then delegates tasks to each reducer