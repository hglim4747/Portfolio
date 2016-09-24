import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <PortfolioHeader />
        { this.props.children }
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

export default connect(map)(Contents);
