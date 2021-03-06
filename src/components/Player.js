import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';

class Player extends React.Component{

  render() {
    const {removePlayer, name, score, id} = this.props;
    console.log('rendered', this.props);
    return (
      <div className={styles.player}>
    <span className={styles["player-name"]}>
      <button className={styles["remove-player"]} onClick={()=> removePlayer(id)}>x</button>
    </span>
        <span className={styles["player-name"]}>
      {name}
    </span>
        <Counter score={score} id={id} />
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps',nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate:',nextProps);

    return (this.props.score !== nextProps.score)?true:false;
  }
}

//Todo: removePlayer를 redux로 변경
export default connect(null, {removePlayer})(Player);