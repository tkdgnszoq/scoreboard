import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

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