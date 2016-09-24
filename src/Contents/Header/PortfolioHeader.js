import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      highlightYear: 0,
    };
  }

  handleChange(yyyy) {
    this.setState({ highlightYear: yyyy });
    this.props.dispatch(push(`/portfolio/${yyyy}`));
  }

  render() {
    const { highlightYear } = this.state;
    const tabStyle = { backgroundColor: '#faa387' };
    const selected = { fontSize: '1.8rem', fontWeight: 'bold' };
    return (
      <div>
        <Tabs inkBarStyle={{ background: 'black', borderColor: 'black', borderStyle: 'solid', height: 12 }} style={{ background: '#cccccc' }}>
          <Tab label="고1" style={highlightYear === 2011 ? selected : tabStyle} onActive={() => this.handleChange(2011)} />
          <Tab label="고2" style={highlightYear === 2012 ? selected : tabStyle} onActive={() => this.handleChange(2012)} />
          <Tab label="대1" style={highlightYear === 2014 ? selected : tabStyle} onActive={() => this.handleChange(2014)} />
          <Tab label="대2" style={highlightYear === 2015 ? selected : tabStyle} onActive={() => this.handleChange(2015)} />
          <Tab label="대3" style={highlightYear === 2016 ? selected : tabStyle} onActive={() => this.handleChange(2016)} />
        </Tabs>
        <div style={{ marginTop: 40, display: highlightYear === 0 ? 'none' : 'inital' }}>
          <img style={{ width: '100%', maxWidth: 350 }} src="drawable/portfolioheader.png" role="presentation" />
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

export default connect(map)(PortfolioHeader);
