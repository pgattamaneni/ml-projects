import {createSelector} from 'reselect';

const selectUserTemplate = state => state.userTemplate;

export const selectCurrentUserTemplate = createSelector(
  [selectUserTemplate],
  userTemplate => userTemplate.template
)