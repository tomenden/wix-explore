import _ from 'lodash';

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const UPDATE_SITES_LIST = 'UPDATE_SITES_LIST';
export const TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY';
export const TOP_STRIP_DISPLAY = 'TOP_STRIP_DISPLAY';
export const UPDATE_SORT_FILTER = 'UPDATE_SORT_FILTER';

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

export function updateTopStripDisplay(stripToDisplay) {
    return {
        type: TOP_STRIP_DISPLAY,
        value: stripToDisplay
    };
}

export function updateSortFilter(sortBy) {
    return {
        type: UPDATE_SORT_FILTER,
        value: sortBy
    };
}