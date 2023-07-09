import UserTemplateType from './userTemplate.types';

const INITIAL_STATE = {
  template: []
}

const userTemplateReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserTemplateType.ADD_USER_TEMPLATE:
      return {
        ...state,
        template: [...state.template, action.payload]
      }
    case UserTemplateType.SET_TEMPLATES:
      return {
        ...state,
        template: action.payload
      }
    default: 
      return state;
  }
}

export default userTemplateReducer;