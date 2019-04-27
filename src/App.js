import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Player} from "./components/Player";
import AddFormPlayer from "./components/AddFormPlayer";
import {connect} from "react-redux";
import {addPlayer, changeScore} from "./redux/actions";


class App extends React.Component {
  maxId = 4;

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  //스코어 증가, 감소 콜백 함수
  /*handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      const player = prevState.players.find(item => item.id === id);
      player.score += delta;

      return {
        players: [...prevState.players]
      }
    })
  }*/
    render(){
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>
        {
          //props.initialPlayers.map(player => <Player key={player.id} name={player.name}/>)
          this.props.players.map(player => <Player key={player.id}
                                                   id={player.id}
                                                   score={player.score}
                                                   removePlayer={this.handleRemovePlayer}
                                                    //changeScore={this.handleChangeScore}
                                                   name={player.name}/>)
        }
        <AddFormPlayer/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  players: state.playerReducer.players
});


export default connect(mapStateToProps)(App);