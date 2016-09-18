import React, { Component } from 'react';
import consts from '../../../../consts';
import Board from './Board';

class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      yyyy: props.yyyy,
    };
  }
  render() {
    const { yyyy, year } = this.state;
    const boards = [];
    Object.keys(year).forEach((key, index) => {
      boards.push(
        <Board key={`board${index}`} work={year[key]} />
      );
    });
    return (
      <div>
        {yyyy}
        {boards}
      </div>
    );
  }
}

export default Year;
