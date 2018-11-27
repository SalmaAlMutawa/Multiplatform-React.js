import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";
import "../../main.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <Link
          to="#"
          className="nav-link active"
          style={{ color: "white", lineHeight: "3" }}
        >
          Orders
        </Link>
        <Link
          to="#"
          className="nav-link active"
          style={{ color: "white", lineHeight: "1.5" }}
        >
          Saved Addresses
        </Link>
        <Link
          to="#"
          className="nav-link active"
          style={{ color: "white", lineHeight: "3" }}
        >
          Edit Profile
        </Link>
        <Link
          to="#"
          className="nav-link active"
          style={{ color: "white", lineHeight: "3" }}
        >
          About
        </Link>
      </div>
    );
  }
}
export default SideBar;
