import React, { Component, PropTypes } from 'react';

export default class UserSite extends Component {
    render() {
        let {thumbnailUrl, description, userName, views, comments, likes} = this.props.site;
        return (
            <div>
                <figure>
                    <img src={thumbnailUrl} width="20%"/>
                    <figcaption>{description}</figcaption>
                    <span>{userName} | {views} | {comments.length} | {likes}</span>
                </figure>

            </div>
        )
    }
}

UserSite.propTypes = {
    site: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired,
        likes: PropTypes.number.isRequired
    })

};