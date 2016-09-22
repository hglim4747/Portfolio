import React, { Component } from 'react';
import PortfolioHeader from './Header/PortfolioHeader';
import Portfolio from './Portfolio';

const style = {
  padding: 40,
  maxWidth: '1080px',
  margin: 'auto',
  background: 'white',
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  borderColor: 'antiquewhite',
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
