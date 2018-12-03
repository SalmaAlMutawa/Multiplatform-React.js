import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class LoginForm extends Component {
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

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    const { username, password } = this.state;
    const { user, errors } = this.props;

    if (user) {
      if (this.props.cart.length >= 1) {
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
              <label>Username</label>
              <input
                className={`form-control ${errors.username && "is-invalid"}`}
                type="text"
                id="username"
                placeholder="Username"
                name="username"
                value={username}
                required
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{errors.username}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                className={`form-control ${errors.password && "is-invalid"}`}
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={password}
                required
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

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
  login: userData => dispatch(actionCreators.login(userData)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
