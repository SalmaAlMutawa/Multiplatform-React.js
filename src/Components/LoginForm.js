import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  }

  render() {
    const { email, username, password } = this.state;
    const { user, errors } = this.props;

    if (user) {
      if (this.props.cart) {
        return <Redirect to="/checkout" />;
      } else {
        return <Redirect to="/list" />;
      }
    }

    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container">
          {errors.non_field_errors && (
            <div className="alert alert-danger" role="alert">
              {errors.non_field_errors}
            </div>
          )}
          <form onSubmit={this.submitHandler} noValidate>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                required
                onChange={this.changeHandler}
              />
            </div>
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}

            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="Username"
                name="username"
                value={username}
                required
                onChange={this.changeHandler}
              />
            </div>
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}

            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={password}
                required
                onChange={this.changeHandler}
              />
            </div>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <div className="row">
              <button type="submit" className="btn btn-info btn-lg mx-4">
                Login
              </button>
              <Link to="/signup">
                <button className="btn btn-info btn-lg">Signup</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  cart: state.cart.list
});

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
