// Input reducer
export const reducer =  (state, action) => {
    // Begin switch statement
    switch (action.type) {
        // Add the new value to the state
        case 'added': {
            return {
                ...state,
                [action.name]: action.value
            };
        }
        // delete a property
        case 'delete': {
            delete state[action.name];
            return state
        }
        // reset the state
        case 'reset': {
            state = {};
            return state;
        }
        default:
            throw Error('Unknown action: ' + action.type);
    }
}