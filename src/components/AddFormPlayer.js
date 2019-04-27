import React from 'react';

export class AddFormPlayer extends React.Component {
  /*state = {
    value:''
  }*/

  textInput = React.createRef();

  /*handelValueChange = (event) =>{
    this.setState({value:event.target.value})
  }*/

  handleSubmit = (event) =>{
    /*event.preventDefault();//submit의 기본이벤트 막기
    this.props.addPlayer(this.state.value);//콜백함수 호출
    this.setState({value:''})//빈값으로 초기화*/
    event.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    event.target.reset();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput}
               placeholder="enter a player's name" required></input>
        <input type="submit" value="Add Player"></input>

      </form>

    );
  }
}