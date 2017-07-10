import {TYPE_SELECT_DOCUMENT} from '../types.js';

const selectDocument = (state = "", action) => {
  switch(action.type) {
    case TYPE_SELECT_DOCUMENT:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default selectDocument;