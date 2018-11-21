import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg  navbar-dark fixed-top"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      >
        <Link
          to="/list"
          className="navbar-brand"
          style={{
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "16pt"
          }}
        >
          Website Name
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/profile/:name"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
              >
                this.props.user.first_name
              </Link>

              <div
                className="dropdown-menu"
                style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
              >
                <Link
                  to="#"
                  className="dropdown-item"
                  style={{ color: "white" }}
                >
                  Previous Orders
                </Link>
                <Link
                  to="/profile/:name"
                  className="dropdown-item"
                  style={{ color: "white" }}
                >
                  View Profile
                </Link>
                <Link
                  to="/home"
                  className="dropdown-item"
                  style={{ color: "white" }}
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;
