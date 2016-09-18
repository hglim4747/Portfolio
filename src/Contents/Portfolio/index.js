import React, { Component } from 'react';
import consts from '../../../consts';
import Year from './Year';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: consts.works,
      yyyy: 2016,
    };

    // setTimeout(() => {
    //   this.setState({ yyyy: 2015 });
    // }, 5000);
  }
  render() {
    const { works, yyyy } = this.state;
    const boards = [];
    // Object.keys(works).forEach((key) => {
    //   boards.push(
    //     <Year key={`year${key}`} yyyy={key} year={works[key]} />
    //   );
    // });
    return (
      <div>
        <Year key={`year${yyyy}`} yyyy={yyyy} year={works[yyyy]} />
      </div>
    );
  }
}

export default Portfolio;
