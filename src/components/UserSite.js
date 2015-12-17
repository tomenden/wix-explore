import React, { Component, PropTypes } from 'react';
import '../style/main.css';
import classNames from 'classnames';
import _ from 'lodash';
import InlineSVG from 'svg-inline-react';
import * as heartSvg from '../images/heart.svg';

export default class UserSite extends Component {
    render() {
        let {thumbnailUrl, description, authorUserName, views, comments = [], likes = [], id:siteId} = this.props.site;
        let {userName, likeFunction} = this.props;
        let likeClasses = classNames({
            'like-icon': true,
            'like-icon-liked': _.includes(likes, userName)
        });
        return (
            <div className="user-site">
                <img className="site-thumbnail" src={thumbnailUrl} width="100%"/>
                <div className="user-image-container">
                    <img src="/src/images/userAvatar.svg" alt=""/>
                </div>
                <span>By {authorUserName}</span>

                <div className="social-bar">
                    <div>
                        <object type="image/svg+xml" data="/src/images/heart.svg" className={likeClasses}
                                onClick={()=>likeFunction(siteId)}/>

                        {_.get(likes, 'length', 0)}
                        <img src="/src/images/views.svg"/>{views}
                        <img src="/src/images/comments.svg"/> {_.get(comments, 'length', 0)}

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