// INITIAL STATE
const initialState = {
    scheduledFlights: [],
    pastFlights: [],
    flightDetails: {},
    views: {
        add: true,
        view: false,
        edit: false
    }
}

// ACTION TYPES
const CLEAR_FLIGHTS = 'CLEAR_FLIGHTS';
const UPDATE_SCHEDULED_FLIGHTS = 'UPDATE_SCHEDULED_FLIGHTS';
const UPDATE_PAST_FLIGHTS = 'UPDATE_PAST_FLIGHTS';
const UPDATE_VIEW_ADD = 'UPDATE_VIEW_ADD';
const UPDATE_VIEW_VIEW = 'UPDATE_VIEW_VIEW';
const UPDATE_VIEW_EDIT = 'UPDATE_VIEW_EDIT';

// ACTION EXPORTS
export function clearFlights() {
    return {
        type: CLEAR_FLIGHTS,
        payload: []
    }
}

export function updateScheduledFlights(flights){
    return {
        type: UPDATE_SCHEDULED_FLIGHTS,
        payload: flights
    }
}

export function updatePastFlights(flights){
    return {
        type: UPDATE_PAST_FLIGHTS,
        payload: flights
    }
}

export function updateViewAdd(){
    return {
        type: UPDATE_VIEW_ADD,
        payload: {}
    }
}

export function updateViewView(flight){
    return {
        type: UPDATE_VIEW_VIEW,
        payload: flight
    }
}

export function updateViewEdit(flight){
    return {
        type: UPDATE_VIEW_EDIT,
        payload: flight
    }
}

// FLIGHT REDUCER
function reducer(state = initialState, action) {
    switch(action.type){
        case CLEAR_FLIGHTS:
            return {...state, scheduledFlights: action.payload, pastFlights: action.payload}
        case UPDATE_SCHEDULED_FLIGHTS:
            return {...state, scheduledFlights: action.payload};
        case UPDATE_PAST_FLIGHTS:
            return {...state, pastFlights: action.payload};
        case UPDATE_VIEW_ADD:
            return {...state, flightDetails: {}, views: {add: true, view: false, edit: false}};
        case UPDATE_VIEW_VIEW:
            return {...state, flightDetails: action.payload, views: {add: false, view: true, edit: false}};
        case UPDATE_VIEW_EDIT:
            return {...state, flightDetails: action.payload, views: {add: false, view: false, edit: true}};
        default:
            return state;
    }
}

export default reducer;