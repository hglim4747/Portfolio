import React, { Component } from 'react';
import Portfolio from './Portfolio/index';
import PortfolioHeader from './Header/PortfolioHeader';

const style = {
  paddingLeft: 20,
  paddingTop: 40,
  minWidth: 500,
  maxWidth: '60%',
  height: '93%',
  margin: 'auto',
  background: 'white',
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  borderColor: 'antiquewhite',
  overflow: 'scroll',
};

class Contents extends Component {
  render() {
    return (
      <div style={style}>
        <PortfolioHeader />
        <Portfolio />
      </div>
    );
  }
}

export default Contents;
