var current_user = () => {
  return new Promise(function(resolve, reject) {
    let account = null;
    if (sessionStorage.getItem('user')) {
      account = localStorage.getItem('account');
    }
    resolve(account);
  });
};

export default current_user;
