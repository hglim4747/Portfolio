import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import App from './App';
import Contents from './Contents';
import Portfolio from './Contents/Portfolio';
import portfolioReducer from './reducer';
injectTapEventPlugin();

const middleware = routerMiddleware(browserHistory);
const store = createStore(
  combineReducers({
    portfolio: portfolioReducer,
    routing: routerReducer,
  }),
  applyMiddleware(middleware)
);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#FF7043',
    secondary1Color: 'rgb(255, 154, 122)',
  },
});


const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={App}>
              <Route path="/portfolio" component={Contents}>
                <Route path=":selectedYear" component={Portfolio} />
              </Route>
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default Root;
