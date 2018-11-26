import React, { Component } from "react";
// import { Link } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";

import AddressForm from "./AddressForm";

class Checkout extends Component {
  render() {
    return (
      <div>
        <AddressForm />
      </div>
    );
  }
}

export default Checkout;
