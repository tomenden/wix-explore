import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {changeCategory} from '../actions';


let CategoryFilter = (props) => {
    return (
        <ul>
            {
                _.map(props.categories, (category, index) => {
                    return (
                        <li onClick={()=>props.changeCategory(category)}
                            key={index}>
                            {category}
                        </li>);
                })
            }
        </ul>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        changeCategory: (newCategory)=> {
            dispatch(changeCategory(newCategory));
        }
    };
}


export default connect(
    null,
    mapDispatchToProps
)(CategoryFilter);