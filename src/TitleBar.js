import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { setNavigationOpen } from './action';

class TitleBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={{ height: 64 }}>
        <div style={{ height: 64, position: 'fixed', width: '100%', zIndex: 5 }}>
          <AppBar
            style={{ margin: 'auto', width: '100%', maxWidth: 1080 }}
            title="Introduce"
            onLeftIconButtonTouchTap={() => this.props.dispatch(setNavigationOpen(true))}
          />
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
};

export default connect(map)(TitleBar);
