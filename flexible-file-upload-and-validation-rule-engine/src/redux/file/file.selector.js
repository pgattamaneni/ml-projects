import { createSelector } from 'reselect';

const selectFile = state => state.file;

export const selectFileItems = createSelector(
  [selectFile],
  (file) => file.fileItems
)