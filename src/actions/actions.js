import _ from 'lodash';

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const UPDATE_SITES_LIST = 'UPDATE_SITES_LIST';
export const TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY';

export function changeCategory(newCategory) {
    return {
        type: CHANGE_CATEGORY,
        category: newCategory
    };
}

export function updateSitesList(sites) {
    return {
        type: UPDATE_SITES_LIST,
        value: sites
    };
}

export function toggleSidebarVisibility(isVisible) {
    return {
        type: TOGGLE_SIDEBAR_VISIBILITY,
        value: !!isVisible
    };
}