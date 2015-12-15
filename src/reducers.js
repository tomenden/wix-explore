import {CHANGE_NAME, CHANGE_AGE, CHANGE_HAIR_COLOR, CHANGE_EYE_COLOR} from './actions';
import {combineReducers} from 'redux';

let name = (state = 'world', action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return action.newName;
        default:
            return state;
    }
};

let age = (state = '18', action) => {
    switch (action.type) {
        case CHANGE_AGE:
            return action.newAge;
        default:
            return state;
    }
};

export const greeterApp = combineReducers({
        name,
        age
    }
);
