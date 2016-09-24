import React, { Component } from 'react';
import { connect } from 'react-redux';
import Left from './Left';
import TitleBar from './TitleBar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div className="page-wrap">
          <TitleBar />
          <Left />
          { this.props.children }
        </div>
      </div>
    );
  }
}

function map(state) {
  const {
    portfolio,
  } = state;
  return portfolio;
}

export default connect(map)(App);
