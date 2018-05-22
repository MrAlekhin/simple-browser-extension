export const fetchUser = () => {
  return {
    type: 'FETCH_USER'
  };
};

export const login = data => {
  return { type: 'LOGIN_USER', payload: data };
};

export const logout = () => {
  return { type: 'LOGOUT_USER' };
};

export const selectCountry = index => {
  return { type: 'SELECT_COUNTRY', payload: index };
};
