import React, {Component} from 'react';
import _ from 'lodash';
import UserSite from '../components/UserSite';
import {connect} from 'react-redux';


let UserSitesContainer = (props) => {
    return (
        <div className="user-sites-container">
            {
                _.map(props.sites, (site) => {
                    return <UserSite site={site} key={site.id} />
                })
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        sites: state.sites
    };
}


export default connect(
    mapStateToProps)
(UserSitesContainer);