export const addItemToFiles = (fileItems, fileItemToAdd) => {
  //no checking, adding items directly.
  return [...fileItems, fileItemToAdd];
}