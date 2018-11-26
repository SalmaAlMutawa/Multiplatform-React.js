import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.logoutFunc = this.logoutFunc.bind(this);
  }

  logoutFunc() {
    this.props.logout();
    return <Redirect to="/list" />;
  }

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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            {this.props.user ? (
              <li className="nav-item dropdown">
                <Link
                  to="/profile/:name"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                >
                  {this.props.user.username}
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
                  <span
                    className="dropdown-item"
                    style={{ color: "white" }}
                    onClick={this.logoutFunc}
                  >
                    Logout
                  </span>
                </div>
              </li>
            ) : (
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
