import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import InternetFrame from "./components/internets/internetframe.js";
import RestaurantFeed from "./components/restaurants/restaurantfeed.js";
import Map from "./components/googlemap/googlemapcontainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="frame">
          <Router>
            <Switch>
              <Route exact path="/" render={() => <InternetFrame />} />
              <Route path="/restaurants" component={RestaurantFeed} />
              <Route path="/findlunch" component={Map} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
