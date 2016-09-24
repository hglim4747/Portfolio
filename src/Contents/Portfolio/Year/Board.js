import React, { Component } from 'react';
import { Panel, Button, Glyphicon } from 'react-bootstrap';
import consts from '../../../../consts';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: props.work,
      open: false,
    };
    this.handleOpen = () => {
      this.setState({
        open: !this.state.open,
      });
    };
  }

  getVideos() {
    const mp4Tags = [];
    const { work } = this.state;

    let i = 0;

    let { clipNum } = work;
    if (typeof (clipNum) === 'undefined') {
      clipNum = 0;
    }

    for (i = 0; i < clipNum; i += 1) {
      mp4Tags.push(
        <div key={`clip${i}`} style={{ margin: 10, textAlign: 'center' }}>
          <video
            controls
            style={{ maxWidth: '100%' }}
          >
            <source src={`/${consts.server}/media/${work.filter}/${i}.mp4`} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      );
    }
    return mp4Tags;
  }

  getImages() {
    const jpgTags = [];
    const { work } = this.state;

    let i = 0;

    let { jpgNum } = work;
    if (typeof (jpgNum) === 'undefined') {
      jpgNum = 0;
    }

    for (i = 0; i < jpgNum; i += 1) {
      jpgTags.push(
        <div key={`jpgclip${i}`} style={{ margin: 10, textAlign: 'center' }}>
          <img src={`${consts.server}/media/${work.filter}/i${i}.jpg`} role="presentation" style={{ maxWidth: '100%' }} />
        </div>
      );
    }
    return jpgTags;
  }


  render() {
    const { name, type, target, description } = this.state.work;
    const { open } = this.state;

    return (
      <div>
        <div
          style={{
            background: '#ffe4dc',
            padding: 10,
          }}
        >
          <div style={{ display: 'block' }}>
            <div style={{ fontWeight: 'bold', display: 'inline-block', marginLeft: 15 }}>
              { name }
            </div>
            <div style={{ display: 'inline-block', marginLeft: 15 }}>
              {type}
            </div>
          </div>
        </div>
        <div style={{ padding: 8 }}>
          <div style={{ color: 'orange', fontWeight: 'bold' }}>
            목표
          </div>
          <hr style={{ margin: 5, borderColor: 'orange' }} />
          <div style={{ padding: 10 }}>
            {target}
          </div>
          <br />
          <div style={{ color: 'orange', fontWeight: 'bold' }}>
            설명
          </div>
          <hr style={{ margin: 5, borderColor: 'orange' }} />
          <div style={{ padding: 10 }}>
            {description}
          </div>
        </div>
        <div style={{ padding: 10, background: 'white', textAlign: 'end' }}>
          <Button
            bsStyle="warning"
            onClick={this.handleOpen}
            style={{ width: '150px' }}
          >
            {open ? '영상접기' : '영상펼치기'}
          </Button>
        </div>

        <Panel collapsible expanded={open} style={{ display: open ? 'block' : 'none' }}>
          {this.getVideos()}
          {this.getImages()}
        </Panel>

        <hr style={{ marginTop: 0, marginBottom: 70 }} />
      </div>
    );
  }
}

export default Board;
