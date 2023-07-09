import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
//redux-persist is the library used for including local storage or session storage in the application.
import {persistStore} from 'redux-persist';

const middlewares = [];
//Thunk middleware is enabled, any time we attempt to dispatch
//a function instead of an object, the middleware will call
//that function with dispatch method itslef as the first
//argument.

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export const persistor = persistStore(store);
export default {store, persistor };