import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';
import classNames from 'classnames';

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
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)} onClick={()=> this.props.changeScore(this.props.id, -1)}>-</button>
        <span className={styles["counter-score"]}>{this.props.score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)} onClick={()=> this.props.changeScore(this.props.id, 1)}>+</button>
      </div>
    );
  }
}

//액션을 디스패치하는 props로

export default connect(null, {changeScore})(Counter);