import React, { Component } from 'react';
import Left from './Left';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div className="page-wrap">
          <Header />
          <Left />
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
