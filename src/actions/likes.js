import _ from 'lodash';
import {firebaseActions} from './firebase';

export function toggleLikes(siteId) {
    return (dispatch, getState) => {
        var userName = getState().userName;
        var sites = getState().sites;
        var updatedSites = _.reduce(sites, reduceSites, []);

        function reduceSites(accumulated, site) {
            let updatedSite = _.assign({}, site);

            if (site.id === siteId) {
                var likes = _.get(site, 'likes', []);

                if (_.includes(likes, userName)) {
                    updatedSite.likes = _.filter(likes, function (userNameInLikedArray) {
                        return userNameInLikedArray !== userName;
                    });
                } else {
                    updatedSite.likes = likes.concat(userName);
                }
            }

            accumulated.push(updatedSite);
            return accumulated;
        }

        dispatch(firebaseActions.saveSites(updatedSites));
    };
}