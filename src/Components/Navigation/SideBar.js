import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";

class SideBar extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-2">
          <nav
            className="nav nav-dark"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            <Link to="#" className="nav-link active" style={{ color: "white" }}>
              Orders
            </Link>
            <Link to="#" className="nav-link active" style={{ color: "white" }}>
              Saved Addresses
            </Link>
            <Link to="#" className="nav-link active" style={{ color: "white" }}>
              Edit Profile
            </Link>
            <Link to="#" className="nav-link active" style={{ color: "white" }}>
              About
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}
export default SideBar;
