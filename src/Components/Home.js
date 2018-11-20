import React, { Component } from "react";
import TopNavBar from "./Navigation/TopNavBar";

class Home extends Component {
  render() {
    return (
      <div className="wrapper style1">
        <div id="banner" className="container">
          <p>
            Welcome to <strong>Website Name</strong>! We really hope you enjoy
            shopping with us
          </p>
          <a href="#" className="button medium">
            Start Shopping
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
