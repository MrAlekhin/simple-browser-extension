import { combineReducers } from 'redux';

import count from './count';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  count,
  auth: authReducer,
  form: reduxForm
});
