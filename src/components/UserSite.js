import React, { Component, PropTypes } from 'react';
import '../style/main.css';
import classNames from 'classnames';
import _ from 'lodash';

export default class UserSite extends Component {
    render() {
        let {thumbnailUrl, name, description, authorUserName, views, comments = [], likes = [], id:siteId} = this.props.site;
        let {userName, likeFunction, goToSitePageFunction} = this.props;
        let likeClasses = classNames({
            'liked': _.includes(likes, userName),
            'social-section': true
        });
        return (
            <div className="user-site">
                <img className="site-thumbnail" src={thumbnailUrl} width="100%" onClick={goToSitePageFunction}/>
                <img src="/src/images/userAvatar2.svg" alt="" className="user-avatar"/>

                <div className="site-name">{name}</div>
                <div className="author">By {authorUserName}</div>

                <div className="social-bar">
                    <div>
                        <div onClick={()=>likeFunction(siteId)} className={likeClasses}>
                            <img src="/src/images/like.svg" className="like-icon like-icon-empty"/>
                            <img src="/src/images/like-full.svg" className="like-icon like-icon-full"/>
                            {_.get(likes, 'length', 0)}
                        </div>

                        <div className="social-section">
                            <img src="/src/images/views.svg"/>
                            <span>{views}</span>
                        </div>
                        <div className="social-section">
                            <img src="/src/images/comments.svg"/>
                            <span>{_.get(comments, 'length', 0)}</span>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

UserSite.propTypes = {
    site: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        description: PropTypes.string,
        authorUserName: PropTypes.string.isRequired,
        views: PropTypes.number,
        comments: PropTypes.array,
        likes: PropTypes.array
    })

};