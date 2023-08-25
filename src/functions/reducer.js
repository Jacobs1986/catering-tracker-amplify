// Generic Input reducer
export const reducer =  (state, action) => {
    // Begin switch statement
    switch (action.type) {
        // Add the new value to the state
        case 'add': {
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

// Reducer for size Info
export const sizeReducer = (state, action) => {
    // Begin the switch statement
    switch (action.type) {
        // If the type is add
        case 'add': {
            // add to the state
            return {
                ...state,
                [action.name]: action.value
            };
        }
         // If the type is delete
         case 'delete': {
            // Set the removeName variable
            let removeName = "sizeType"+action.num;
            // Set the removeCost variable
            let removeCost = "sizeCost"+action.num;
            // delete removeName from state
            delete state[removeName];
            // delete removeCost from state
            delete state[removeCost];
            // return the state
            return state;
         }
         // If the type is unknown
         default:
            throw Error('Unkown action: ' + action.type);
    }
}