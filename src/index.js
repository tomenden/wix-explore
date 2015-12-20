import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import Firebase from 'firebase';
import {FIREBASE_URL} from './constants'
import {firebaseActions} from './actions/firebase';
import {syncReduxAndRouter} from 'redux-simple-router';
import {history} from './constants';


const store = configureStore();

syncReduxAndRouter(history, store);
store.dispatch(firebaseActions.setFirebaseRef(new Firebase(FIREBASE_URL)));

render(
    <Root store={store}/>,
    document.getElementById('root'));
