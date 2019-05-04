import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import {Heroes} from "./heroes/Heroes";
import {Menu} from "./Menu";
import {Hero} from "./hero/Hero";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Menu></Menu>
        <div className="container" style={{backgroundColor:'#ffffff'}}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/heroes" component={Heroes}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
            <Route path="/hero/:hero_id" component={Hero}></Route>
          </Switch>
        </div>

      </BrowserRouter>

    );
  }
}