import React, { Component } from 'react';
import {changeName, changeAge, changeEyeColor, changeHairColor} from '../actions';
import {connect} from 'react-redux';
import UserSite from '../components/UserSite';
import UserSitesContainer from '../containers/UserSitesContainer';
import data from '../data';


//imgUrl: PropTypes.string.isRequired,
//    description: PropTypes.string.isRequired,
//    userName: PropTypes.string.isRequired,
//    views: PropTypes.number.isRequired,
//    comments: PropTypes.array.isRequired,
//    likes: PropTypes.number.isRequired

let App = (props) => {
    return (
        <div>
            <UserSitesContainer sites={props.sites} />
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