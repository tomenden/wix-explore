import React, {Component} from 'react';
import _ from 'lodash';
//import UserSite from '../components/UserSite';
import {connect} from 'react-redux';
import {toggleLikes} from '../actions/likes';


let UserSitePopup = (props) => {
    /**
     * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    var disqus_config = function () {
//                 this.page.url = 'Explore'; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = '333'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    var d = document, s = d.createElement('script');

    if (props.site) {
        s.src = '//wixgetsocial.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        return (
            <div className="user-site-popup">
                <div className="author-container">
                    <div className="author-image">
                        <img src={props.site.avatarUrl}/>

                    </div>
                    <div className="author-name">
                        {props.site.authorUserName}
                    </div>
                    <div className="author-more-info">
                        {props.site.authorMoreInfo}
                    </div>
                    <div className="author-message-btn">

                    </div>
                    <div className="author-more-sites">
                        Made from this template

                    </div>

                </div>
                <div className="site-container">
                    <div className="site-thumbnail">
                        <img src={props.site.thumbnailUrl}/>

                    </div>
                    <div className="site-social-triplet">

                    </div>
                    <div className="site-comments">
                        <div id="disqus_thread"></div>

                    </div>

                </div>
                <div className="extra-container">
                    <div className="site-name">
                        {props.site.name}

                    </div>
                    <div className="site-description">
                        {props.site.description}

                    </div>
                    <div className="site-category">
                        Category
                        <br/>
                        {props.site.category}

                    </div>
                    <div className="social-share">
                        Share
                    </div>
                    <div className="site-colors">
                        Colors
                    </div>
                    <div className="site-tags">
                        Tags
                    </div>

                </div>

            </div>
        )
    } else {
        return (<div>loading...</div>)
    }
};

function mapStateToProps(state, ownProps) {
    return {
        //site: state.currentSite,
        userName: state.userName,
        site: _.findWhere(state.sites, {id: parseInt(ownProps.params.siteId)})

    };
}

function mapDispatchToProps(dispatch) {
    return {};
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(UserSitePopup);