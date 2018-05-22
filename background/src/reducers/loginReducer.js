import data from '../data.js';

const initialState = {
  isLogin: data.isLogin,
  countries: data.countries,
  selectedCountry: data.selectedCountryIndex
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER': {
      if (
        data.account.username === action.payload.username &&
        data.account.password === action.payload.password
      ) {
        return Object.assign({}, ...state, {
          isLogin: true,
          countries: data.countries,
          selectedCountry: data.selectedCountryIndex
        });
      }
    }
    case 'LOGOUT_USER': {
      return Object.assign({}, ...state, {
        isLogin: false
      });
    }
    case 'SELECT_COUNTRY': {
      return {
        isLogin: true,
        countries: data.countries,
        selectedCountry: action.payload
      };
    }
    default:
      return state;
  }
}
