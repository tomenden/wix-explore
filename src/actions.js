export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export function changeCategory(newCategory) {
    return {
        type: CHANGE_CATEGORY,
        category: newCategory
    };
}

