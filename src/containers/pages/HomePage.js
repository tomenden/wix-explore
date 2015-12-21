import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeCategory, toggleSidebarVisibility} from '../../actions/actions';
import {CATEGORIES} from '../../constants';
import UserSitesContainer from '../UserSitesContainer';
import Sidebar from '../../components/Sidebar';
import FilterContainer from '../../containers/FilterContainer';
import {firebaseActions} from '../../actions/firebase';
import classNames from 'classnames';



export default class HomePage extends Component {
    render() {
        var props = this.props;
        var containerClasses = classNames({
            "home-page-container": true,
            "full-width": !props.isSidebarVisible
        });
        return (
            <div>
                <div className={containerClasses}>
                    <FilterContainer categories={CATEGORIES} onChangeCategory={props.onChangeCategory}
                                     selected={props.filter}/>
                    <UserSitesContainer sites={props.sites} filter={props.filter}/>
                </div>
                <Sidebar visibility={props.isSidebarVisible} changeVisibilityFunction={props.changeSidebarVisibility}/>
            </div>

        );
    }

    componentDidMount() {
        this.props.listenToChanges();
    }
}

function mapStateToProps(state) {
    return {
        sites: state.sites,
        filter: state.filter,
        isSidebarVisible: state.sidebarVisibility
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeCategory: (newCategory) => dispatch(changeCategory(newCategory)),
        listenToChanges: () => dispatch(firebaseActions.listenToChanges()),
        changeSidebarVisibility: (isVisible) => dispatch(toggleSidebarVisibility(isVisible))

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);