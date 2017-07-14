import { combineReducers } from 'redux';
import registerFormToggled from './registerFormToggled.js';
import currentUser from './currentUser.js';
const rootReducer = combineReducers({
  registerFormToggled
});

export default rootReducer;
