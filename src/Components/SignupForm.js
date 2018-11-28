import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
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
    this.props.signup(this.state, this.props.history);
  }

  render() {
    const { first_name, last_name, email, username, password } = this.state;
    const { errors } = this.props;
    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container">
          <form onSubmit={this.submitHandler} noValidate>
            <div className="form-group">
              <label>First Name</label>
              <input
                className={`form-control ${errors.first_name && "is-invalid"}`}
                type="text"
                id="first_name"
                placeholder="First Name"
                name="first_name"
                value={first_name}
                required
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{errors.first_name}</div>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                className={`form-control ${errors.last_name && "is-invalid"}`}
                type="text"
                id="last_name"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                required
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{errors.last_name}</div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                className={`form-control ${errors.email && "is-invalid"}`}
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                required
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

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
                Signup
              </button>
              <Link to="/login">
                <button className="btn btn-info btn-lg">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
