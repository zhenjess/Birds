import { combineReducers } from "redux";

import sessionReducer from './session_reducer';

import sessionErrorsReducer from './session_errors_reducer';

import errorsReducer from './errors_reducer';

import entitiesReducer from './entities_reducer';

import shoesReducer from './shoes_reducer';

const rootReducer = combineReducers({
    session: sessionReducer, 
    sessionErrors: sessionErrorsReducer, 
    errors: errorsReducer, 
    entities: entitiesReducer,
    shoes: shoesReducer
});

export default rootReducer;