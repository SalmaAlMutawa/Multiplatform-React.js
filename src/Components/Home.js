import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopNavBar from "./Navigation/TopNavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <p style={{ textAlign: "center" }}>
            Welcome to <strong>Website Name</strong>! We really hope you enjoy
            shopping with us
          </p>
          <div className="container">
            <Link to="/list">
              <button className="btn btn-info btn-lg">Start Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
