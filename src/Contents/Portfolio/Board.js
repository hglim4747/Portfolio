import React, { Component } from 'react';
import { Panel, Button, Glyphicon } from 'react-bootstrap';
import consts from '../../../consts';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workKey: this.props.workKey,
      work: consts.works[this.props.workKey],
      open: false,
    };
    this.handleOpen = () => {
      this.setState({
        open: !this.state.open,
      });
    }
  }

  getVideos() {
    const mp4Tags = [];
    const { workKey, work } = this.state;
    const { works } = consts;

    let i = 0;

    let { clipNum } = work;
    if (typeof(clipNum) === 'undefined') {
      clipNum = 0;
    }

    for (i = 0; i < clipNum; i += 1) {
      mp4Tags.push(
        <div key={`clip${workKey}-${i}`} style={{ margin: 10 }}>
          <video
            controls
            style={{ maxWidth: '80%' }}
          >
            <source src={`${consts.server}/media/${work.filter}/${i}.mp4`} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      );
    }
    return mp4Tags;
  }


  render() {
    const { name } = this.state.work;
    const { open } = this.state;

    return (
      <div>
        <div
          style={{
            background: '#ffe4dc',
            padding: 10,
            fontWeight: 'bold',
          }}
        >
          { name }
        </div>

        <div style={{ padding: 10, background: 'white', textAlign: 'end' }}>
          <Button
            bsStyle="warning"
            onClick={this.handleOpen}
            style={{ width: '150px' }}
          >
            영상펼치기
          </Button>
        </div>

        <Panel collapsible expanded={open} style={{ display: open ? 'block' : 'none' }}>
          {this.getVideos()}
        </Panel>

        <hr style={{ marginTop: 0 }} />
      </div>
    );
  }
}

export default Board;
