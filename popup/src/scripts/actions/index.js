// import axios from 'axios';
// import { FETCH_USER } from './types';
//import loginCheck from 'loginCheck';
import current_user from './current_user';
//
// export const fetchUser = (values, history) => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
//
// export const handleToken = token => async dispatch => {
//   const res = await axios.post('/api/stripe', token);
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
//
// export const submitSurvey = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);
//   history.push('/surveys');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

export const fetchUser = () => async dispatch => {
  var account = null;
  if (sessionStorage.getItem('user')) {
    account = localStorage.getItem('account');
  }
  dispatch({ type: 'FETCH_USER', payload: account });
};
