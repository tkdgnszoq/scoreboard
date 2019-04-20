import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=> props.removePlayer(props.id)}>x</button>
    </span>
    <span className="player-name">
      {props.name}
    </span>
    <Counter />
  </div>
);

/*const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement">-</button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment">+</button>
  </div>
) ;*/

class Counter extends React.Component{
  /*state = {
    score: 0
  }*/
  constructor(){
    super();
    this.state = {
      score: 0,
      a:10
    }
    //this.incrementScore = this.incrementScore.bind(this);
  }

  incrementScore = () => {
    console.log('increment:', this);
    //this.state.score +=1;
    //1)setState()로 값을 변경해야만 UI렌더링이 일어난다.
    //this.setState({score:this.state.score + 1})
    //2)merge된다. =. 변경한 state만 기존값에 오버라이딩 된다.
    //3)setState는 비동기로 일어난다.
    this.setState(prevState => ({score:prevState.score + 1}));
  }

  decrementScore(){
    this.setState(prevState => ({score:prevState.score -1}));
  }
  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    );
  }
}



/*const App = (props)=>(
  <div className="scoreboard">
    {/!*{title:'My Scoreboard, totlaPlayers:11*!/}
    <Header title="My Scoreboard" totalPlayers={11}/>

    {
      props.initialPlayers.map(player => <Player key={player.id} name={player.name} score={player.score}/>)
    }

  </div>
);*/

class App extends React.Component {
  state = {
    players:[
      {name: 'LDK', id:1},
      {name: 'HONG', id:2},
      {name: 'KIM', id:3},
      {name: 'PARK', id:4}
    ]
  }

  /*handleRemovePlayer = (id) => {
    debugger;
    const players1 = this.state.players.filter(player => (player.id !== id));
    this.setState({players: players1})
    //this.setState({players1}) //short hand property 키,value같으면 하나만써도됨.
  }*/

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  render(){
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          //props.initialPlayers.map(player => <Player key={player.id} name={player.name}/>)
          this.state.players.map(player => <Player key={player.id}
                                                   id={player.id}
                                                   removePlayer={this.handleRemovePlayer}
                                                   name={player.name}/>)
        }

      </div>
    );
  }
}

export default App;