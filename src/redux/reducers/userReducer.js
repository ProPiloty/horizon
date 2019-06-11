// INITIAL STATE
const initialState = {
    user: {},
}

// ACTION TYPES
const UPDATE_USER = 'UPDATE_USER';

// ACTION EXPORTS
export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

// USER REDUCER
function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USER:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}

export default reducer;