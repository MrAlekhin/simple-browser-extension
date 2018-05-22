import data from '../data.js';

const initialState = {
  isLogin: data.isLogin
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MATCH_USER': {
      if (
        data.account.username === action.data.username &&
        data.account.password === action.data.password
      ) {
        sessionStorage.setItem('account', data.account.username);
        return Object.assign({}, ...state, {
          isLogin: true
        });
      }
    }
    default:
      return state;
  }
}
