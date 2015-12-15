import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserSite from '../components/UserSite';
import UserSitesContainer from '../containers/UserSitesContainer';
import CategoryFilter from '../containers/CategoryFilter';
import data from '../data';
const CATEGORIES = ['business', 'store', 'photography', 'music', 'design', 'restaurant', 'accommodation', 'events', 'portfolio', 'other'];

//imgUrl: PropTypes.string.isRequired,
//    description: PropTypes.string.isRequired,
//    userName: PropTypes.string.isRequired,
//    views: PropTypes.number.isRequired,
//    comments: PropTypes.array.isRequired,
//    likes: PropTypes.number.isRequired

let App = (props) => {
    return (
        <div>
            <CategoryFilter categories={CATEGORIES}/>
            <UserSitesContainer sites={props.sites}/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        sites: state.sites
    };
}


export default connect(
    mapStateToProps
)(App);