import React, { Component } from "react";
import { Link } from "react-router-dom";

import zainlogo from "../images/zainlogo.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div
            className="jumbotron"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white" }}
          >
            <p>
              Welcome to <strong>Zain World</strong>! We really hope you have a
              Wonderful experience!
            </p>
            <img
              className="img-fluid"
              src={zainlogo}
              style={{ height: "80", width: "20" }}
            />
            <Link to="/list">
              <button className="btn btn-outline-info btn-lg">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
