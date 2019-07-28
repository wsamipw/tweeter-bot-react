import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Tweet from "../views/Tweet";
import Trending from "../views/Trending";
import Home from "../views/Home";
import Madness from "../views/Madness";
class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tweet" component={Tweet} />
        <Route path="/trending" component={Trending} />
        <Route path="/madness" component={Madness} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    );
  }
}

export default MainRoute;