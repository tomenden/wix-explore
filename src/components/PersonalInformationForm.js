import React, { Component, PropTypes } from 'react'

export default class PersonalInformationForm extends Component {
    render() {
        return (
            <form>
                <label htmlFor="name">Your name:</label>
                <input ref="nameInput" id="name" type="text"
                       onChange={()=>this.props.onChangeName(this.refs.nameInput.value)}/>
                <label htmlFor="age">Your Age:</label>
                <input ref="ageInput" type="number" id="age"
                       onChange={()=>this.props.onChangeAge(this.refs.ageInput.value)}/>
            </form>
        );
    }
}

PersonalInformationForm.propTypes = {
    onChangeName: PropTypes.func.isRequired,
    onChangeAge: PropTypes.func.isRequired
};