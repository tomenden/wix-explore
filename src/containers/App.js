import React, { Component } from 'react';
import {changeName, changeAge, changeEyeColor, changeHairColor} from '../actions';
import {connect} from 'react-redux';
import PersonalInformationForm from '../components/PersonalInformationForm';
import Greeting from '../components/Greeting';


let App = (props) => {
    return (
        <div>
            <PersonalInformationForm onChangeName={props.onChangeName} onChangeAge={props.onChangeAge}/>
            <Greeting name={props.name} age={props.age}/>
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