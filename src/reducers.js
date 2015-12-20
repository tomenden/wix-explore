import {CHANGE_CATEGORY, UPDATE_SITES_LIST, TOGGLE_SIDEBAR_VISIBILITY, TOP_STRIP_DISPLAY} from './actions/actions';
import {SET_FIREBASE_REF} from './actions/firebase';
import {routeReducer} from 'redux-simple-router';
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

let filter = (state = 'All', action) => {
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

let sidebarVisibility = (state = true, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR_VISIBILITY:
            return action.value;
        default:
            return state;
    }
};

let topStripDisplay = (state = "CLOSED", action) => {
    switch (action.type) {
        case TOP_STRIP_DISPLAY:
            return action.value;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
        sites,
        filter,
        userName,
        firebaseRef,
        sidebarVisibility,
        topStripDisplay,
        routing: routeReducer
    }
);
