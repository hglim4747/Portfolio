import React, { Component } from 'react';
import consts from '../../../consts';
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
    const boards = [];
    Object.keys(works).forEach((key) => {
      boards.push(
        <Year key={`year${key}`} yyyy={key} year={works[key]} />
      );
    });
    return (
      <div>
        {boards}
      </div>
    );
  }
}

export default Portfolio;
