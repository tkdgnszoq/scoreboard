import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

class Counter extends React.Component {
  static propTypes = { //static이 붙으면 class변수
    changeScore : PropTypes.func,
    id : PropTypes.number,
    score : PropTypes.number
  }

  constructor(){
    super();
  }

  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={()=> this.props.changeScore(this.props.id, -1)}>-</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={()=> this.props.changeScore(this.props.id, 1)}>+</button>
      </div>
    );
  }
}

//액션을 디스패치하는 props로

export default connect(null, {changeScore})(Counter);