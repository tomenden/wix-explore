import {updateSitesList} from './actions';

export const SET_FIREBASE_REF = 'SET_FIREBASE_REF';

function saveSites(sites) {
    return (dispatch, getState) => {
        const { firebaseRef } = getState();
        firebaseRef.set(sites);
    };
}

function setFirebaseRef(ref) {
    return {
        type: SET_FIREBASE_REF,
        value: ref
    };
}

function listenToChanges() {
    return (dispatch, getState)=> {
        const {firebaseRef} = getState();
        firebaseRef.on('value', (snapshot) => {
            dispatch(updateSitesList(snapshot.val()));
        });
    };
}


var firebaseActions = {
    saveSites,
    setFirebaseRef,
    listenToChanges
};

export {firebaseActions};