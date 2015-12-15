import {CHANGE_NAME, CHANGE_AGE, CHANGE_HAIR_COLOR, CHANGE_EYE_COLOR} from './actions';
import {combineReducers} from 'redux';
import data from './data';


let sites = (state = data.sites, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
        sites
    }
);
