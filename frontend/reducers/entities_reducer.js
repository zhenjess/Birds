import { combineReducers } from "redux";

import usersReducer from './users_reducer';

import shoesReducer from './shoes_reducer';

import materialsReducer from './materials_reducer';

import shoeMaterialsReducer from './shoe_materials_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    shoes: shoesReducer, 
    materials: materialsReducer, 
    shoeMaterials: shoeMaterialsReducer
});

export default entitiesReducer; //represents data from db and manages it
//then delegates tasks to each reducer