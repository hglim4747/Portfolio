import React, { Component } from 'react';
import Board from './Board';

class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      yyyy: props.yyyy,
    };
  }

  getTitle(yyyy) {
    let tag = '';
    if (yyyy === 2011) tag = '선린고 1학년';
    if (yyyy === 2012) tag = '선린고 2학년';
    if (yyyy === 2014) tag = '건국대 1학년';
    if (yyyy === 2015) tag = '건국대 2학년';
    if (yyyy === 2016) tag = '건국대 3학년 ~ 휴학';

    return (
      <div style={{ margin: '20px 0', textAlign: 'center' }}>

        <div style={{ fontSize: '2.6rem', fontWeight: 'bold', color: '#ff5400', display: 'inline-block', marginRight: 20 }}>
          {yyyy}년 활동
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'grey', textAlign: 'center', display: 'inline-block' }}>
          {tag}
        </div>

      </div>
    );
  };

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
        <div>
          {this.getTitle(yyyy)}
        </div>

        {boards}
      </div>
    );
  }
}

export default Year;
