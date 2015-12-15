import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {changeCategory} from '../actions';


let CategoryFilter = (props) => {
    return (
        <ul>
            {
                _.map(props.categories, (category) => {
                    return <li onClick={()=>{
                    console.log('hi');
                    props.changeCategory(category)}}>{category}</li>;
                })
            }
        </ul>
    );
};

//function mapStateToProps(state) {
//    return {
//        categories: state.categories
//    };
//}

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