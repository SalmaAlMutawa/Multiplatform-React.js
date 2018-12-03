import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../main.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <Link
          to="/orders/"
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
      </div>
    );
  }
}
export default SideBar;
