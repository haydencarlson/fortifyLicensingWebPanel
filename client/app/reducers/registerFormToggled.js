import {TYPE_TOGGLE_REGISTER_FORM} from '../types.js';

const registerFormToggled = (state = false, action) => {
  switch(action.type) {
    case TYPE_TOGGLE_REGISTER_FORM:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default registerFormToggled;
