import React, {Component} from 'react';
import _ from 'lodash';
import UserSite from '../components/UserSite';
import {connect} from 'react-redux';
import {toggleLikes} from '../actions/likes';
import { pushPath } from 'redux-simple-router'


let UserSitesContainer = (props) => {
    var sitesAfterFilterBeforeSort = _(props.sites).filter((site)=> {
        return site.category === props.filter || props.filter === 'All';
    }).value();

    return (
        <div className="user-sites-container">
            {
                sortByFilter(sitesAfterFilterBeforeSort, props.sortFilter).map((site) => {
                    return <UserSite site={site} key={site.id}
                                     userName={props.userName}
                                     likeFunction={props.likeSite}
                                     goToSitePageFunction={()=>props.goToSitePage(site.id)}/>
                })
            }
        </div>
    );
};


function sortByFilter(sites, filter) {
    switch (filter) {
        case 'Most Popular':
            return _(sites).sortBy(function (site) {
                return _.get(site, 'likes.length', 0);
            }).reverse().value();
        default:
            return sites;
    }

}

//function sortByMostPopular(sites) {
//    return _(sites).sortBy(function (site) {
//        return _.get(site, 'likes.length', 0);
//    }).reverse().value();
//}


function mapStateToProps(state) {
    return {
        sites: state.sites,
        userName: state.userName,
        sortFilter: state.sortFilter
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