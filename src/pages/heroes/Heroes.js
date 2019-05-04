import React, {Fragment} from 'react';
import axios from 'axios';
import Pagination from 'rc-pagination';

import './Heroes.scss';


export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      totalCount: 115,
      currentPage: 1,
      heroes: []
    };
  }

  pageChanged = (current, pageSize)=>{
    this.setState({
      currentPage: current,
      pageSize: pageSize
    },()=> this.getHeroes());
  };


  render() {
    return (
      <Fragment>

    <div className="row">
      {this.state.heroes.map(hero => (
        <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
          <div className="card">
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                 style={{width: '100%'}} alt={hero.name}></img>
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text">email: {hero.email}</p>
              <p className="card-text">sex: {hero.sex}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
        <Pagination onChange={this.pageChanged} pageSize={this.state.pageSize} current={this.state.currentPage} total={this.state.totalCount}/>
    </Fragment>

    );
  }

  componentDidMount() {
    this.getHeroes();
  }

  async getHeroes() {
    const start_index = (this.state.currentPage - 1) * this.state.pageSize;

    const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?start_index=${start_index}&page_size=${this.state.pageSize}`);
    console.log(res); //value.data가 원하는 데이터가 들어있다.
    this.setState({
      heroes: res.data.data, totalCount: res.data.total
    });

  }
}