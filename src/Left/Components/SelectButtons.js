import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionQA from 'material-ui/svg-icons/action/question-answer';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionMedia from 'material-ui/svg-icons/action/perm-media';

const style = {
  backgroundColor: 'transparent',
};

const innerDivStyle = {
  color: 'white',
  fontSize: 20,
};

const selectedStyle = {
  backgroundColor: 'rgb(221, 87, 25)',
  color: 'white',
  fontSize: 20,
};

const selectedIconStyle = { fill: 'black', width: 36, height: 36, margin: 6 };

const SelectButtons = (props) => {
  const { selected } = props;
  return (
    <div style={style} id="menu">
      <List>
        <hr />
        <ListItem
          primaryText="인적사항"
          rightIcon={<ActionFace style={selected === 0 ? selectedIconStyle : {}} />}
          innerDivStyle={selected === 0 ? selectedStyle : innerDivStyle}
          onClick={()=>console.log('click')}
        />
        <ListItem
          primaryText="자기소개"
          rightIcon={<ActionQA style={selected === 1 ? selectedIconStyle : {}} />}
          innerDivStyle={selected === 1 ? selectedStyle : innerDivStyle}
        />
        <ListItem
          primaryText="포트폴리오"
          rightIcon={<ActionMedia style={selected === 2 ? selectedIconStyle : {}} />}
          innerDivStyle={selected === 2 ? selectedStyle : innerDivStyle}
        />
        <hr />
      </List>
    </div>
  );
};

SelectButtons.propTypes = {
  selected: PropTypes.number.isRequired,
};

export default SelectButtons;
