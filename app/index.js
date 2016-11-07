import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App/';
import configureStore from './store/configureStore'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore()



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
