import React, { Component } from 'react';
import {changeName, changeAge, changeEyeColor, changeHairColor} from '../actions';
import {connect} from 'react-redux';
import UserSite from '../components/UserSite';
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
            <UserSite site={data.sites[0]}  />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        name: state.name,
        age: state.age
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeName: (newName) => {
            dispatch(changeName(newName))
        },
        onChangeAge: (newAge) => {
            dispatch(changeAge(newAge))
        }
    };
}

console.log('hi');

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);