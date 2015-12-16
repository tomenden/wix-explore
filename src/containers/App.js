import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserSite from '../components/UserSite';
import UserSitesContainer from '../containers/UserSitesContainer';
import CategorySelector from '../components/CategorySelector';
import data from '../data';
import {changeCategory} from '../actions';
const CATEGORIES = ['all', 'business', 'store', 'photography', 'music', 'design', 'restaurant', 'accommodation', 'events', 'portfolio', 'other'];

let App = (props) => {
    return (
        <div>
            <CategorySelector categories={CATEGORIES} onChangeCategory={props.onChangeCategory} selected={props.filter}/>
            <UserSitesContainer sites={props.sites} filter={props.filter}/>

        </div>
    )
};

function mapStateToProps(state) {
    return {
        sites: state.sites,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeCategory: (newCategory) => dispatch(changeCategory(newCategory))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);