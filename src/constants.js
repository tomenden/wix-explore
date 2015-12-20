import {createHistory} from 'history';
export const history = createHistory();
export const FIREBASE_URL = 'https://explore-page.firebaseio.com/';
export const CATEGORIES = ['All', 'Business', 'Store', 'Photography', 'Music', 'Design', 'Restaurant', 'Accommodation', 'Events', 'Portfolio', 'Other'];


//export const TOP_STRIP_DISPLAY_CONSTS = {
//    CATEGORIES: 'CATEGORIES'
//};

export const FILTERS = {
    CATEGORIES: {
        items: [
            'All', 'Business', 'Store',
            'Photography', 'Music', 'Design',
            'Restaurant', 'Accommodation', 'Events',
            'Portfolio', 'Other'
        ],
        label: 'Category',
        topStripDisplayName: 'CATEGORIES'
    }

};