import {createSelector} from 'reselect';

//input selector --> takes complete state and returns piece of the state. 
const selectUser = state => state.user;

//createSelector takes two argument : first an array of the input selectors, 
// second: an function that would return the value that you want from this selector. This function
// takes the input return from the inputSelector (first parameter)
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)