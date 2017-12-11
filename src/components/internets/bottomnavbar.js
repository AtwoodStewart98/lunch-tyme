import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import internets from "../../Cuts/tab_internets@2x.png";
import lunch from "../../Cuts/tab_lunch@2x.png";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lunch: this.props.lunch,
      internets: this.props.internets
    };
  }

  render() {
    const selected = {
      opacity: 0.5
    };

    return (
      <nav className="bottom-bar">
        <Router>
          <Link to={"/restaurants"}>
            <div style={!this.state.lunch ? selected : null}>
              <img src={lunch} alt="lunch" />
              <p style={{ color: "#fff" }}>lunch</p>
            </div>
          </Link>
        </Router>
        <Router>
          <Link to={"/"}>
            <div style={!this.state.internets ? selected : null}>
              <img src={internets} alt="internets" />
              <p style={{ color: "#fff" }}>internets</p>
            </div>
          </Link>
        </Router>
      </nav>
    );
  }
}

export default NavBar;
