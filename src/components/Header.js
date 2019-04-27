import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

//export const Header = (props) => {
const Header = ({players, title, updateTitle}) => {

  return (
    <header>
      <Statistics players={players}/>
      <h1 onClick={()=>updateTitle('Redux Dispatch')}>{title}</h1>
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

const mapStateToProps = (state) => ({
  title:state.playerReducer.title
});

/*const mapActionToProps = (dispatch) => ({
  updateTitle: (title) => dispatch(updateTitle(title))
});*/

//export default connect(mapStateToProps, mapActionToProps)(Header);
export default connect(mapStateToProps, {updateTitle})(Header);