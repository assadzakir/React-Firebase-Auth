import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Router } from 'react-router'
import App from './containers/app/App';
import Signin from './containers/signin/signin';
import Signup from './containers/signup/signup';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// ...
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const syncedHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  //Wraping up in Provider
  <Provider  store={store}>
      <Router history={syncedHistory}>
          <Route path='/' component={App}>
              <IndexRoute component={Signup} />
              <Route path='signup' component={Signup} />
              <Route path='signin' component={Signin} />
          </Route>
      </Router>
  </Provider>
  ,
  document.getElementById('root')
);
