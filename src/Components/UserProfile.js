import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  render() {
    return (
      <div className="wrapper style1">
        <div id="banner" className="container">
          <h3>First Name: </h3>
          <h3>Last Name: </h3>
          <h3>Username: </h3>
          <h3>Email: </h3>
          <h3>Shipping Address: </h3>
          <div className="row">
            <button className="button" type="button">
              Edit Profile
            </button>
            <button className="button" type="button">
              Change Password
            </button>
            <button className="button" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
