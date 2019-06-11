// INITIAL STATE
const initialState = {
    scheduledFlights: [],
    pastFlights: []
}

// ACTION TYPES
const UPDATE_SCHEDULED_FLIGHTS = 'UPDATE_SCHEDULED_FLIGHTS';

// ACTION EXPORTS
export function updateFlights(flights){
    return {
        type: UPDATE_SCHEDULED_FLIGHTS,
        payload: flights
    }
}

// FLIGHT REDUCER
function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_SCHEDULED_FLIGHTS:
            return {...state, flights: action.payload};
        default:
            return state;
    }
}

export default reducer;