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
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//wixgetsocial.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    return (
        <div className="user-site-popup">
            <div className="author-container">
                <div className="author-image">

                </div>
                <div className="author-name">

                </div>
                <div className="author-more-info">

                </div>
                <div className="author-message-btn">

                </div>
                <div className="author-more-sites">

                </div>

            </div>
            <div className="site-container">
                <div className="site-thumbnail">

                </div>
                <div className="site-social-triplet">

                </div>
                <div className="site-comments">
                    <div id="disqus_thread"></div>
                    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>


                </div>

            </div>
            <div className="extra-container">
                <div className="site-name">

                </div>
                <div className="site-description">

                </div>
                <div className="site-category">

                </div>
                <div className="social-share">

                </div>
                <div className="site-colors">

                </div>
                <div className="site-tags">

                </div>

            </div>

        </div>
    );
};

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