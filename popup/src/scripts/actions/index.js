// account: { username: 'user1', password: '123456' },
// countries: [
//   { name: 'Canada' },
//   { name: 'United States' },
//   { name: 'Mexico' },
//   { name: 'United Kingdom' },
//   { name: 'France' }
// ],
// selectedCountryIndex: -1,
// options: ['Help', 'About', 'Settings', 'Advanced']
// import { FETCH_USER, MATCH_USER } from './types';

export const fetchUser = () => {
  return {
    type: 'FETCH_USER'
  };
};

export const login = data => {
  return { type: 'MATCH_USER', data };
};

// export const submitSurvey = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);
//   history.push('/surveys');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
