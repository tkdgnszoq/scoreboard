import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;

  state = {
    isRunning : false
  }
  constructor(props) {
    super(props);
  }

  handleStopwatch = (prevState) => {
    this.setState(prevState =>({
      isRunning: !prevState.isRunning
    }))

  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? "Stop" : "Start"}</button>
        <button>Reset</button>
      </div>

    );
  }

  tick(){

  }
  // Dom이 렌더링 된 직후 : 네트워크 호출, 3rd 라이브러리 코딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
    console.log(this.tickRef);
  }

  // Dom이 파괴되기 직전: 리소스 해제 시
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}