import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserSitesContainer from '../containers/UserSitesContainer';
import UserSitePopup from '../containers/UserSitePopup';
import FilterContainer from '../containers/FilterContainer';
import {changeCategory} from '../actions/actions';
import {firebaseActions} from '../actions/firebase'
import {CATEGORIES, history} from '../constants';
import Sidebar from '../components/Sidebar';
import _ from 'lodash';
import data from '../data';
import {Router, Route} from 'react-router';
import HomePage from './pages/HomePage';


export default class App extends Component {
    render() {
        //var props = this.props;
        return (
            <Router history={history}>
                <Route path="/" component={HomePage}></Route>
                <Route path="/site/:siteId" component={UserSitePopup}></Route>
            </Router>
        );
    }

    componentDidMount() {
        this.props.listenToChanges();

    }
};

function mapDispatchToProps(dispatch) {
    return {
        listenToChanges: () => dispatch(firebaseActions.listenToChanges())

    };
}

export default connect(
    null,
    mapDispatchToProps
)(App);