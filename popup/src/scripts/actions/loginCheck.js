import { DATA } from '../data.js';

export default ({ username, password }) => {
  var account = null;
  return new Promise(function(resolve, reject) {
    if (
      username === DATA.account.username &&
      password === DATA.account.password
    ) {
      account = DATA.account;
    }
    setTimeout(resolve(account), 2000, 'foo');
  });
};
