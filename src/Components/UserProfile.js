import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SideBar from "./Navigation/SideBar";

class UserProfile extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        <SideBar />
        <div
          className="jumbotron"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <div className="container">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.user.first_name}
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.user.last_name}
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.user.username}
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.user.email}
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
              </div>
            </form>
            <div className="container text-center">
              <button type="button" className="btn btn-outline-warning btn-lg">
                Change Password
              </button>
              <button
                type="button"
                className="btn btn-outline-info btn-lg mx-3"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(UserProfile);
