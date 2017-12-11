import React, { Component } from "react";

import NavBar from "../internets/bottomnavbar.js";

import mapicon from "../../Cuts/icon_map@2x.png";
import "../../styles/restaurant.css";

import axios from "axios";

class RestaurantFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      internets: false,
      lunch: true
    };
  }

  componentDidMount() {
    return axios
      .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
      .then(resp => {
        console.log(resp.data);
        this.setState({
          restaurants: resp.data.restaurants
        });
      });
  }

  render() {
    let restaurantInfo = null;
    if (this.state.restaurants) {
      let restaurantArr = this.state.restaurants;
      console.log(this.state.restaurants);

      restaurantInfo = restaurantArr.map((e, i) => {
        return (
          <div
            className="flex-restaurants"
            style={{ backgroundImage: `url(${e.backgroundImageURL})` }}
            key={i}
          >
            <div>
              <h1 className="locations">{e.name}</h1>
              <h3 className="locations">{e.category}</h3>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="restaurant-body">
        <h1 className="restaurant-header">Lunch Tyme</h1>
        <img src={mapicon} alt="icon" />
        <div>{restaurantInfo}</div>
        <NavBar lunch={this.state.lunch} internets={this.state.internets} />
      </div>
    );
  }
}

export default RestaurantFeed;
