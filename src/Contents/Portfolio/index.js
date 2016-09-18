import React, { Component } from 'react';
import consts from '../../../consts';
import Board from './Board';

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
    Object.keys(works).forEach((row, index) => {
      boards.push(
        <Board key={`board${index}`} workKey={row} />
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
