import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';

import { alias, wrapStore } from 'react-chrome-redux';

const aliases = {
  'user-login': () => {
    chrome.notifications.create('user login');
  }
};

const store = createStore(reducers, applyMiddleware(alias(aliases)));

wrapStore(store, {
  portName: 'example'
});
