import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";

import AddressForm from "./AddressForm";
import Cart from "./Cart";

class Checkout extends Component {
  componentWillMount() {
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <AddressForm />
        </div>

        <div>
          <Cart match={this.props.match.url.substring(1)} />
        </div>
        <button
          className="btn btn-info btn-lg"
          onClick={() => this.props.checkout(this.props.list)}
        >
          Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    items: state.items.items,
    list: state.cart.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: item_ID => dispatch(actionCreators.fetchItemDetail(item_ID)),

    checkout: orderList => dispatch(actionCreators.checkout(orderList))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
