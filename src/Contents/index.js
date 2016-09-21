import React, { Component } from 'react';
import PortfolioHeader from './Header/PortfolioHeader';
import Portfolio from './Portfolio';

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
    console.log(this.props);
    return (
      <div style={style}>
        <PortfolioHeader />
        <Portfolio />
      </div>
    );
  }
}

export default Contents;
