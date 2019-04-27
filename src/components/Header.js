import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

//export const Header = (props) => {
export const Header = ({players, title}) => {
  //console.log('props',props);
  //const {players, title} = props;
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch/>
    </header>
  );
}

Header.propTypes = {
  title : PropTypes.string,
  players : PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string,
    id:PropTypes.number,
    score:PropTypes.number
  }))
}

Header.defaultProps = {
  title:'Scoreboard'
}