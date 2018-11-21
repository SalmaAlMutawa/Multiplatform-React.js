import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../Store/actions";

class RegistationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    const type = this.props.match.url.substring(1);
    if (type === "login") {
      this.props.login(this.state, this.props.history);
    } else {
      this.props.signup(this.state, this.props.history);
    }
  }

  render() {
    // if (this.props.user) {
    //   return <Redirect to="/Hello" />;
    // }
    const type = this.props.match.url.substring(1);

    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container">
          {type === "login" ? (
            <h2>Login to Checkout</h2>
          ) : (
            <h2>Signup to Order</h2>
          )}

          <form onSubmit={this.submitHandler} noValidate>
            {/* {authStore.errors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {authStore.errors}
            </div>
          )} */}
            <div className="form-group">
              <label for="username">Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={this.changeHandler}
              />
            </div>

            {this.props.errors.username && (
              <div className="alert alert-danger">
                {this.props.errors.username}
              </div>
            )}
            <div className="form-group">
              <label for="password">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={this.changeHandler}
              />
            </div>
            {this.props.errors.password && (
              <div className="invalid-feedback">
                {this.props.errors.password}
              </div>
            )}
            {this.props.errors.non_field_errors && (
              <div className="invalid-feedback">
                {this.props.errors.non_field_errors}
              </div>
            )}
          </form>
        </div>
        <div className="row text-right">
          <div className="container text-center">
            <input
              className="btn btn-small btn-info btn-lg mx-4"
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />

            <Link
              to={type === "login" ? "/signup" : "/login"}
              className="btn btn-small btn-info btn-lg"
              // onClick={() => (authStore.errors = [])}
            >
              {type === "login" ? "Signup" : "Login"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history)),
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);
