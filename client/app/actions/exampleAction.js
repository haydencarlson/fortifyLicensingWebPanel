import {TYPE_SELECT_DOCUMENT} from '../types.js';

const selectDocument = (doc) => {
	console.log(doc);
  return {
    type: TYPE_SELECT_DOCUMENT,
    payload: doc
  }
}

export default selectDocument;