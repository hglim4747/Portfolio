import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import SelectButtons from './Components/SelectButtons';
import { setNavigationOpen } from '../action';
const style = {
  textAlign: 'center',
  height: '100%',
  width: '100%',
};

class Left extends Component {
  render() {
    const menu = this.props.navigationOpen;
    return (
      <div
        style={{ position: 'fixed', height: '100%', width: '33.3%', maxWidth: '256px', zIndex: menu ? 99999 : -1 }}
      >
        <Drawer
          style={{ height: '100%', width: '100%' }}
          containerStyle={{ position: 'relative', width: 'initial', overflow: 'hidden' }}
          open={menu}
          docked={false}
          onRequestChange={() => this.props.dispatch(setNavigationOpen(false))}
        >
          <div style={style}>
            <div
              style={{
                backgroundColor: 'rgb(245, 96, 28)',
                width: '100%',
                height: '100%',
              }}
            >
              <div style={{ margin: 'auto' }} id="logo">
                <img
                  src="drawable/suntozlogo.png"
                  role="presentation"
                  style={{
                    backgroundColor: 'whitesmoke',
                    padding: '3px 12px',
                    width: '100%',
                  }}
                />
              </div>

              <div id="profile" style={{ marginTop: '12.5%', marginBottom: '25%' }}>
                <div style={{ backgroundColor: 'darkorange' }}>
                  <hr style={{ marginTop: 0 }} />
                  <img
                    src="drawable/profile.jpg"
                    role="presentation"
                    style={{
                      backgroundColor: 'whitesmoke',
                      padding: '3px',
                      borderRadius: '50%',
                      width: '100%',
                    }}
                  />
                  <hr style={{ marginBottom: 0 }} />
                </div>
              </div>

              <SelectButtons selected={2} />
            </div>

          </div>
        </Drawer>
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

export default connect(map)(Left);
