import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './App';
import Contents from './Contents';
import Portfolio from './Contents/Portfolio';
import reducer from './reducer';
injectTapEventPlugin();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  })
);

const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={App}>
              <Route path="/content" component={Contents}>
                <Route path="/portfolio" component={Portfolio} />
              </Route>
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default Root;
