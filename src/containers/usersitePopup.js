import React, {Component} from 'react';
import _ from 'lodash';
//import UserSite from '../components/UserSite';
import {connect} from 'react-redux';
import {toggleLikes} from '../actions/likes';
import classNames from 'classnames';
import { pushPath } from 'redux-simple-router'



let UserSitePopup = (props) => {
        let likeClasses = classNames({
            'liked': _.includes(_.get(props.site, 'likes', []), props.userName),
            'likes-counter': true
        });

        /**
         * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
         * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
         */
        var disqus_config = function () {
            //this.page.url = 'http://localhost:3000/'; // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = ''+props.site.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        var d = document, s = d.createElement('script');
        s.src = '//wixgetsocial.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());

        (d.head || d.body).appendChild(s);

        return (
            <div className="user-site-popup">
                <div className="author-container">
                    <div className="author-image">
                        <img src={props.site.avatarUrl || '/src/images/userAvatar2.svg'}/>

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
                        <img src={props.site.originalTemplateThumb}/>
                        Made from this template
                    </div>
                </div>
                <div className="site-container">
                    <div className="site-thumbnail">
                        <img className="site-image" src={props.site.thumbnailUrl}/>
                        <a target="_blank" href={props.site.url}><img className="link-image" src="/src/images/link-15.svg"/></a>
                    </div>
                    <div className="site-social-triplet">
                        <div className={likeClasses} onClick={()=>props.likeFunction(props.site.id)}>
                            <img src="/src/images/like.svg" className="like-icon like-icon-empty"/>
                            <img src="/src/images/like-full.svg" className="like-icon like-icon-full"/>
                            {_.get(props.site.likes, 'length', 0)}
                        </div>
                        <div className="views-counter">
                            <img src="/src/images/views.svg"/>
                            <span>{props.site.views}</span>
                        </div>
                    </div>
                    <div className="site-comments">
                        <div className="comments-counter">
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
                        <div className="sub-header">Category</div>
                        <div className="white-label">{props.site.category}</div>
                    </div>
                    <div className="site-tags">
                        <div className="sub-header">Tags</div>
                        {
                            _.map(props.site.tags, function(tag){
                                return <div className="white-label" key={tag}>{tag}</div>
                            })
                        }
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
                        <div className="sub-header">Share It</div>
                        <div className="socicon Facebook"></div>
                        <div className="socicon Twitter"></div>
                        <div className="socicon google"></div>
                        <div className="socicon Pin"></div>

                    </div>

                </div>

                <a onClick={props.backToHome}><img src="/src/images/close.svg" className="close-icon"/></a>


            </div>
        );
    };

function mapStateToProps(state, ownProps) {
    return {
        //site: state.currentSite,
        userName: state.userName,
        site: _.findWhere(state.sites, {id: parseInt(ownProps.params.siteId)}) || {}

    };
}

function mapDispatchToProps(dispatch) {
    return {
        likeFunction: (siteId) => dispatch(toggleLikes(siteId)),
        backToHome: () => dispatch(pushPath('/'))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(UserSitePopup);