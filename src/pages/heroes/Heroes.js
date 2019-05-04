import React from 'react';
import axios from 'axios';

import './Heroes.scss';

export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: []
    };
  }

  render() {
    return (
      <ul className="img-box">
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id} className="row align-items-center m-0">
              <div className="col-1 py-2">
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name} style={{width:'100%'}} className="img-fluid rounded-circle"/>
              </div>
              <span className="col">{hero.name}</span>
            </li>
            )
          )
        }
      </ul>

    );
  }

  componentDidMount() {
    this.getHeroes();
  }

  async getHeroes() {
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    console.log(res); //value.data가 원하는 데이터가 들어있다.
    this.setState({
      heroes: res.data
    });

  }
}