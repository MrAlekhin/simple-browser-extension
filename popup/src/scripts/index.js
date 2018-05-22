import React from 'react';
import { render } from 'react-dom';

import App from './components/app/App';

import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';

const store = new Store({
  portName: 'example'
});
store.ready().then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
