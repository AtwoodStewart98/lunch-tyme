import React, { Component } from "react";
import { findDOMNode } from "react-dom";

import MediaQuery from "react-responsive";

import HamburgerButton from "./animateburger.js";
import webBack from "../../Cuts/ic_webBack@2x.png";
import webRefresh from "../../Cuts/ic_webRefresh@2x.png";
import webForward from "../../Cuts/ic_webForward@2x.png";
import internets from "../../Cuts/tab_internets@2x.png";
import lunch from "../../Cuts/tab_lunch@2x.png";

import "../../styles/internets.css";

class InternetFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <MediaQuery maxDeviceWidth={1224}>
          <div className="nav-resizer">
            <img src={webBack} alt="Back" />
            <img src={webRefresh} alt="Refresh" />
            <img src={webForward} alt="Forward" />
          </div>
          <div className="internets">
            <div>
              <div className="contact-us">
                <HamburgerButton />
                <div className="red-box" />
                <div className="inner-contact">
                  <p>contact</p>
                  <img
                    src="https://www.urbanairship.com/images/agencies/bottlerocket.png"
                    alt="Bottle Rocket logo"
                  />
                </div>
              </div>
              <div>
                <h3>we look forward to hearing from you</h3>
              </div>
              <div>
                <h3>Let us know how we can help!</h3>
                <p>
                  If you are interested in hiring Bottle Rocket for your mobile
                  project, please visit our hire us page.
                </p>
              </div>
            </div>
          </div>
          <nav className="bottom-bar">
            <div>
              <img src={lunch} alt="lunch" />
              <p>lunch</p>
            </div>
            <div>
              <img src={internets} alt="internets" />
              <p>internets</p>
            </div>
          </nav>
        </MediaQuery>
      </div>
    );
  }
}

export default InternetFrame;
