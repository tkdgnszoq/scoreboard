import React from 'react';

export class AddFormPlayer extends React.Component {
  state = {
    value:''
  }

  handelValueChange = (event) =>{
    this.setState({value:event.target.value})
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handelValueChange}
               placeholder="enter a player's name"></input>
        <input type="submit" value="Add Player"></input>

      </form>

    );
  }
}