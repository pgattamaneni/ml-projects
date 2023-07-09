import FileActionTypes from './file.types';

export const addFileItems = file => ({
  type: FileActionTypes.ADD_FILE,
  payload: file
})

export const setFileItems = value => ({
  type: FileActionTypes.SET_FILES,
  payload: value
})