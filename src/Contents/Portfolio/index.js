import React, { Component } from 'react';
import consts from '../../../consts';
import { connect } from 'react-redux';

import Year from './Year';
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: consts.works,
    };
  }
  render() {
    const { works } = this.state;
    const yyyy = this.props.params.selectedYear;

    console.log(yyyy);

    if (yyyy === 0) return (<div style={{ textAlign: 'center', fontWeight: 'bold', color: 'orange' }}> 메뉴를 선택해 주세요 </div>);

    return (
      <div>
        <Year key={`year${yyyy}`} yyyy={yyyy} year={works[yyyy]} />
      </div>
    );
  }
}

function map(state, ownProps) {
  const {
    portfolio,
  } = state;
  return Object.assign({}, portfolio, ownProps);
}

export default connect(map)(Portfolio);
