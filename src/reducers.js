import {CHANGE_CATEGORY, UPDATE_SITES_LIST} from './actions/actions';
import {SET_FIREBASE_REF} from './actions/firebase'
import {combineReducers} from 'redux';
//import data from './data';


let sites = (state = [], action) => {
    switch (action.type) {
        case UPDATE_SITES_LIST:
            return [...action.value];
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

let userName = (state = 'tome', action) => {
    switch (action.type) {
        default:
            return state;
    }
};

let firebaseRef = (state = null, action) => {
    switch (action.type) {
        case SET_FIREBASE_REF:
            return action.value;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
        sites,
        filter,
        userName,
        firebaseRef
    }
);
