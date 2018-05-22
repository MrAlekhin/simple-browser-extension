import { combineReducers } from 'redux';

import authReducer from './authReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  auth: authReducer,
  login: loginReducer
});
