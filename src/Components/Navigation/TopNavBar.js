import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>
              <a href="#">WEBSITE NAME</a>
            </h1>
            <span>by Mariam & Salma</span>
          </div>
          <nav id="nav">
            <ul>
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <a href="#">Whatever</a>
              </li>
              <li>
                <a href="#">Whatever</a>
              </li>
              <li>
                <a href="#">Username</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
