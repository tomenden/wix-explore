export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';

export function changeName(newName) {
    return {
        type: CHANGE_NAME,
        newName: newName
    };
}

export function changeAge(newAge) {
    return {
        type: CHANGE_AGE,
        newAge: newAge
    };
}

