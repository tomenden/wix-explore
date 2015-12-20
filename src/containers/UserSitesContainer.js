import React, {Component} from 'react';
import _ from 'lodash';
import UserSite from '../components/UserSite';
import {connect} from 'react-redux';
import {toggleLikes} from '../actions/likes';
import { pushPath } from 'redux-simple-router'


let UserSitesContainer = (props) => {
    return (
        <div className="user-sites-container">
            {
                props.sites.filter((site)=> {
                    return site.category === props.filter || props.filter === 'all';
                }).map((site) => {
                    return <UserSite site={site} key={site.id} userName={props.userName} likeFunction={props.likeSite} goToSitePageFunction={()=>props.goToSitePage(site.id)}/>
                })
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        sites: state.sites,
        userName: state.userName
    };
}

function mapDispatchToProps(dispatch) {
    return {
        likeSite: (siteId) => dispatch(toggleLikes(siteId)),
        goToSitePage: (siteId) => {
            dispatch(pushPath('/site/' + siteId))
        }
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(UserSitesContainer);