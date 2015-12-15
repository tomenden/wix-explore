import {CHANGE_CATEGORY} from './actions';
import {combineReducers} from 'redux';
import data from './data';


let sites = (state = data.sites, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

let filter = (state = 'all', action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return action.category;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
        sites,
        filter
    }
);
