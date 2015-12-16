import React, { Component, PropTypes } from 'react';
import '../style/main.css';


export default class UserSite extends Component {
    render() {
        let {thumbnailUrl, description, userName, views, comments, likes} = this.props.site;
        return (
            <div className="user-site">
                <figure>
                    <img src={thumbnailUrl} width="100%"/>
                    <figcaption>{description}</figcaption>
                    <span>{userName} | {views} | {comments.length} | {likes}</span>
                </figure>

            </div>
        )
    }
}

UserSite.propTypes = {
    site: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired,
        likes: PropTypes.number.isRequired
    })

};