import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserSitesContainer from '../containers/UserSitesContainer';
import UserSitePopup from '../containers/UserSitePopup';
import CategorySelector from '../components/CategorySelector';
import {changeCategory} from '../actions/actions';
import {firebaseActions} from '../actions/firebase'
import {CATEGORIES} from '../constants';


export default class App extends Component {
    render() {
        var props = this.props;
        return (
            <div>
                <UserSitePopup site={props.sites[0]}/>
                <CategorySelector categories={CATEGORIES} onChangeCategory={props.onChangeCategory}
                                  selected={props.filter}/>
                <UserSitesContainer sites={props.sites} filter={props.filter}/>
            </div>
        );
    }
    componentDidMount() {
        this.props.listenToChanges();
    }
};


function mapStateToProps(state) {
    return {
        sites: state.sites,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeCategory: (newCategory) => dispatch(changeCategory(newCategory)),
        listenToChanges: () => dispatch(firebaseActions.listenToChanges())
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);