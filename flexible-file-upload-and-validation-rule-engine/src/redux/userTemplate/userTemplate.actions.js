import UserTemplateType from './userTemplate.types';

export const addUserTemplate = template => ({
  type: UserTemplateType.ADD_USER_TEMPLATE,
  payload: template
})

export const setTemplateItems = value => ({
  type: UserTemplateType.SET_TEMPLATES,
  payload: value
})