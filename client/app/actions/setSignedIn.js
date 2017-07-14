import {TYPE_SET_SIGNED_IN} from '../types.js';

const setSignedIn = (bool) => {
  return {
    type: TYPE_SET_SIGNED_IN,
    payload: bool
  }
}

export default setSignedIn;
