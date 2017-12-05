import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import HomeFrame from "./components/home/homeframe.js";
import RestaurantFeed from "./components/restaurants/restaurantfeed.js";
import GoogleMapFrame from "./components/googlemap/googlemapframe.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="frame">
          <Router>
            <Switch>
              <Route exact path="/" render={() => <HomeFrame />} />
              <Route path="/restaurants" component={RestaurantFeed} />
              <Route path="/findlunch" component={GoogleMapFrame} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
