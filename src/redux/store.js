// PACKAGES
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';

// REDUCERS
import userReducer from './reducers/userReducer';
import flightReducer from './reducers/flightReducer';

// ROOT REDUCER
const rootReducer = combineReducers({
    userReducer,
    flightReducer
})

// FOR REDUX PERSIST
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// REDUX STORE EXPORT
export const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
export const persistor = persistStore(store);
