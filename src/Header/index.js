import React, { Component } from 'react';

class Left extends Component {
  constructor() {
    super();
    this.state = {
      menu: true,
    };
  }

  render() {
    return (
      <div style={{ width: '100%', height: '7%', background: 'rgb(245, 96, 28)' }}>

      </div>
    );
  }
}

export default Left;
