import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';

import Root from './containers/Root';

import Firebase from 'firebase';
import {FIREBASE_URL} from './constants'
import {firebaseActions} from './actions/firebase';

const store = configureStore();
store.dispatch(firebaseActions.setFirebaseRef(new Firebase(FIREBASE_URL)));


render(
    <Root store={store}/>,
    document.getElementById('root'));
