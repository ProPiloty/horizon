// PACKAGES
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// REDUCERS
import userReducer from './reducers/userReducer';
import flightReducer from './reducers/flightReducer';

// ROOT REDUCER
const rootReducer = combineReducers({
    userReducer,
    flightReducer
})

// REDUX STORE EXPORT
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));