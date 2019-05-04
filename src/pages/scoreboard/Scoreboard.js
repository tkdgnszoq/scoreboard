import React from 'react';
import {connect} from "react-redux";
import Player from "../../components/Player";
import AddFormPlayer from "../../components/AddFormPlayer";
import Header from "../../components/Header";
import './Scoreboard.css';
class Scoreboard extends React.Component {
  maxId = 4;



  render(){
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>
        {
          //props.initialPlayers.map(player => <Player key={player.id} name={player.name}/>)
          this.props.players.map(player => <Player key={player.id}
                                                   id={player.id}
                                                   score={player.score}
            //removePlayer={this.handleRemovePlayer}
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


export default connect(mapStateToProps)(Scoreboard);