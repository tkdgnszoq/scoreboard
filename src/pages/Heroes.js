import React from 'react';
import axios from 'axios';
export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Heroes works
      </div>

    );
  }

  componentDidMount() {
    this.getHeroes();
  }

  async getHeroes() {
    const value = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    console.log(value);

  }
}