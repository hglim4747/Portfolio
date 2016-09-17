import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Left from './Left';
import Contents from './Contents';
import Header from './Header';

injectTapEventPlugin();

class Root extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div className="page-wrap" style={{ height: '100%' }} >
          <Header />
          <Left />
          <Contents />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Root;
