import React, {Component, PropTypes} from 'react';

var obj = {
    a: 1,
    b: 2,
    c: 3
};

export default class Greeting extends Component {
    render() {
        return (
            <div>
            <pre>
                Hi, {this.props.name}! You are {this.props.age} years old
            </pre>
                <h1>Hsodjsdogksd</h1>
            </div>
        );
    }
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};