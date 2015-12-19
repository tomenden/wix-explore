import React, {Component} from 'react';
import _ from 'lodash';
//import UserSite from '../components/UserSite';
import {connect} from 'react-redux';
import {toggleLikes} from '../actions/likes';
import classNames from 'classnames';


let UserSitePopup = (props) => {
    let likeClasses = classNames({
        'liked': _.includes(props.site.likes, props.userName),
        'likes-counter': true
    });

    /**
     * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    var disqus_config = function () {
//                 this.page.url = 'Explore'; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = '333'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    var d = document, s = d.createElement('script');

    s.src = '//wixgetsocial.disqus.com/embed.js';

    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);

    return (
        <div className="user-site-popup">
            <div className="author-container">
                <div className="author-image">
                    <img src={props.site.avatarUrl} />

                </div>
                <div className="author-name">
                    {props.site.authorUserName}
                </div>
                <div className="author-more-info">
                    {props.site.authorDescription}
                </div>
                <div className="author-message-btn">
                    Message
                </div>
                <div className="author-more-sites">
                    Made from this template
                    <img src={props.site.originalTemplateUrl}/>

                </div>

            </div>
            <div className="site-container">
                <div className="site-thumbnail">
                    <img src={props.site.thumbnailUrl} />

                </div>
                <div className="site-social-triplet">
                    <div className={likeClasses} onClick={()=>likeFunction(siteId)} >
                        <img src="/src/images/like.svg" className="like-icon like-icon-empty"/>
                        <img src="/src/images/like-full.svg" className="like-icon like-icon-full"/>
                        {_.get(props.site.likes, 'length', 0)}
                        <span>Likes</span>

                    </div>
                    <div className="views-counter">
                        <img src="/src/images/views.svg"/>
                        <span>{props.site.views}</span>
                        <span>Views</span>
                    </div>

                </div>
                <div className="site-comments">
                    <div className="comments-counter">
                        <span>Comments</span>
                    </div>

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
                    <span className="sub-header">Category</span>
                    <br/>
                    <div>
                        {props.site.category}
                    </div>


                </div>
                <div className="site-tags">
                    <span className="sub-header">Tags</span>

                </div>

                <div className="site-colors">
                    <div className="sub-header">Colors</div>
                    <div className="color-circle pink"></div>
                    <div className="color-circle blue"></div>
                    <div className="color-circle yellow"></div>
                    <div className="color-circle black"></div>
                    <div className="color-circle green"></div>

                </div>
                <div className="social-share">
                    <span className="sub-header">Share It</span>

                </div>

            </div>

        </div>
    );
};
//<div onClick={()=>likeFunction(siteId)} className={likeClasses}>

function mapStateToProps(state) {
    return {
        //site: state.currentSite,
        userName: state.userName
    };
}

function mapDispatchToProps(dispatch) {
    return{

    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(UserSitePopup);