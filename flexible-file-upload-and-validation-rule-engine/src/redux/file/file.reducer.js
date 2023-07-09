import FileActionTypes from './file.types';
// import { addItemToFiles } from './file.utils';

const INITIAL_STATE = {
  fileItems: []
}

const fileReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FileActionTypes.ADD_FILE:
      return {
        ...state,
        fileItems: [...state.fileItems, action.payload]
      }
    case FileActionTypes.SET_FILES:
      return {
        ...state,
        fileItems: action.payload
      }
    default: 
      return state;
  }
}

export default fileReducer;