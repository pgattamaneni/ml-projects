import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

//local storage 
//we can import session storage as well, check docs for that.
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import fileReducer from './file/file.reducer';
import userTemplateReducer from './userTemplate/userTemplate.reducer';
// import fileReducer from './file/file.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'file', 'userTemplate']
}

//whitelist contains array of objects we want to persist in local storage.

const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer,
  userTemplate: userTemplateReducer
})

export default persistReducer(persistConfig, rootReducer);