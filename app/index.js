// reacr
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
// component
import App from './container/App/';
import TodayZhihuDaily from './container/TodayZhihuDaily/'
import DetailZhihuDaily from './container/DetailZhihuDaily/'
// react-router-redux
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// onTouchtap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={TodayZhihuDaily} />
        <Router path='post/:id' component={DetailZhihuDaily} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
