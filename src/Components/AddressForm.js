import React, { Component } from "react";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      area: "",
      block: "",
      avenue: "",
      street: "",
      house: "",
      extra_instructions: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  // componentWillUnmount() {
  //   this.props.resetForm();
  // }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addAddress(this.state);
  }

  render() {
    const {
      area,
      block,
      avenue,
      street,
      house,
      extra_instructions
    } = this.state;
    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container" style={{ color: "white" }}>
          <h3>Billing Address</h3>
          <form onSubmit={this.submitHandler} noValidate>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label>Area</label>
                  <input
                    className="form-control"
                    type="text"
                    id="area"
                    placeholder="Area"
                    name="area"
                    value={area}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Block</label>
                  <input
                    className="form-control"
                    type="text"
                    id="block"
                    placeholder="Block"
                    name="block"
                    value={block}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Avenue</label>
                  <input
                    className="form-control"
                    type="text"
                    id="avenue"
                    placeholder="Avenue"
                    name="avenue"
                    value={avenue}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Street</label>
                  <input
                    className="form-control"
                    type="text"
                    id="street"
                    placeholder="Street"
                    name="street"
                    value={street}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>House</label>
                  <input
                    className="form-control"
                    type="text"
                    id="house"
                    placeholder="House"
                    name="house"
                    value={house}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Extra Instructions</label>
              <input
                className="form-control"
                type="text"
                id="extra_instructions"
                placeholder="Extra Instructions"
                name="extra_instructions"
                value={extra_instructions}
                required
                onChange={this.changeHandler}
              />
            </div>

            <div className="row">
              <button
                type="submit"
                className="btn btn-outline-info btn-lg mx-4"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   errors: state.errors
// });

const mapDispatchToProps = dispatch => ({
  addAddress: userData => dispatch(actionCreators.addAddress(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(AddressForm);
