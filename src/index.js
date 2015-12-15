import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

var rootElement = document.getElementById('root');

render(
    <Root store={store}/>,
    rootElement);
