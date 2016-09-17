import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import SelectButtons from './Components/SelectButtons';

const style = {
  textAlign: 'center',
  height: '100%',
};

class Left extends Component {
  constructor() {
    super();
    this.state = {
      menu: true,
    };
  }

  render() {
    const { menu } = this.state;
    return (
      <div
        onClick={() => this.setState({ menu: !menu })}
      >
        <Drawer
          style={{ position: 'absolute', height: '93%' }}
          containerStyle={{ position: 'relative' }}
          open={menu}
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

export default Left;
