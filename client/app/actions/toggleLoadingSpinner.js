import {TYPE_TOGGLE_LOADING_SPINNER} from '../types.js';

const toggleLoadingSpinner = (bool) => {
  return {
    type: TYPE_TOGGLE_LOADING_SPINNER,
    payload: bool
  }
}

export default toggleLoadingSpinner;
