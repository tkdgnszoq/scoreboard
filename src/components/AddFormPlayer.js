import React from 'react';

export class AddFormPlayer extends React.Component {
  state = {
    value:''
  }

  handelValueChange = (event) =>{
    this.setState({value:event.target.value})
  }

  handleSubmit = (event) =>{
    //submit의 기본이벤트 막기
    event.preventDefault();
    //콜백함수 호출
    this.props.addPlayer(this.state.value);
    //빈값으로 초기화
    this.setState({value:''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handelValueChange}
               placeholder="enter a player's name"></input>
        <input type="submit" value="Add Player"></input>

      </form>

    );
  }
}