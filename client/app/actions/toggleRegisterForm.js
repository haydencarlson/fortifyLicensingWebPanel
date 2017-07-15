import {TYPE_TOGGLE_REGISTER_FORM} from '../types.js';

const toggleRegisterForm = (bool) => {
  return {
    type: TYPE_TOGGLE_REGISTER_FORM,
    payload: bool
  }
}

export default toggleRegisterForm;
