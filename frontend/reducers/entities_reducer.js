import { combineReducers } from "redux";

import usersReducer from './users_reducer';

import shoesReducer from './shoes_reducer';

import materialsReducer from './materials_reducer';

import colorsReducer from './colors_reducer';

import shoeOptionsReducer from './shoe_options_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    shoes: shoesReducer, 
    materials: materialsReducer, 
    colors: colorsReducer,
    shoeOptions: shoeOptionsReducer
});

export default entitiesReducer; //represents data from db and manages it
//then delegates tasks to each reducer