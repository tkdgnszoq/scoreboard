import React from 'react';
import {Counter} from "./Counter";
import PropTypes from 'prop-types';

export class Player extends React.Component{
  /*static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }*/
  render() {
    const {removePlayer, name, score, id, changeScore} = this.props;


    /*console.log('rendered', this.props);
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=> this.props.removePlayer(this.props.id)}>x</button>
    </span>
        <span className="player-name">
      {this.props.name}
    </span>
        <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/>
      </div>
    );*/
    console.log('rendered', this.props);
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=> removePlayer(id)}>x</button>
    </span>
        <span className="player-name">
      {name}
    </span>
        <Counter score={score} id={id} changeScore={changeScore}/>
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

