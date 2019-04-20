import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";


class App extends React.Component {
  state = {
    players:[
      {name: 'LDK', score:0, id:1},
      {name: 'HONG', score:0, id:2},
      {name: 'KIM', score:0, id:3},
      {name: 'PARK', score:0, id:4}
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

  //스코어 증가, 감소 콜백 함수
  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      const player = prevState.players.find(item => item.id === id);
      player.score += delta;

      return {
        players: [...prevState.players]
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
                                                   score={player.score}
                                                   removePlayer={this.handleRemovePlayer}
                                                    changeScore={this.handleChangeScore}
                                                   name={player.name}/>)
        }

      </div>
    );
  }
}

export default App;