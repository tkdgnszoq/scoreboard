import React from 'react';
import Counter from "./Counter";

export class Player extends React.Component{

  render() {
    const {removePlayer, name, score, id, changeScore} = this.props;
    console.log('rendered', this.props);
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=> removePlayer(id)}>x</button>
    </span>
        <span className="player-name">
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