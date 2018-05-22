export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case 'FETCH_USER':
      return sessionStorage.getItem('account') || false;
    default:
      return state;
  }
}
