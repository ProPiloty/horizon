// INITIAL STATE
const initialState = {
    user: {},
}

// ACTION TYPES
const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';

// ACTION EXPORTS
export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

// USER REDUCER
function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USER:
            return {...state, user: action.payload}
        case CLEAR_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export default reducer;