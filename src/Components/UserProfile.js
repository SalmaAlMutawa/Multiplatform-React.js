import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>First Name: </h3>
          <h3>Last Name: </h3>
          <h3>Username: </h3>
          <h3>Email: </h3>
          <h3>Shipping Address: </h3>
          <div className="row">
            <button type="button">Edit Profile</button>
            <button type="button">Change Password</button>
            <button type="button">Save</button>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
