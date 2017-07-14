import {TYPE_SET_SIGNED_IN} from '../types.js';

const setSignedIn = (state = false, action) => {
  switch(action.type) {
    case TYPE_SET_SIGNED_IN:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default setSignedIn;
