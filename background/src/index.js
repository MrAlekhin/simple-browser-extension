import { createStore } from 'redux';
import rootReducer from './reducers';
import data from './data';
localStorage.setItem('account', data);
console.log(localStorage);

import { wrapStore } from 'react-chrome-redux';

const store = createStore(rootReducer, {});

wrapStore(store, {
  portName: 'example'
});
