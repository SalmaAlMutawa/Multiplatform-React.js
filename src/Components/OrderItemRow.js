import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// import * as actionCreators from "./Store/actions";

//Components

class OrderItemRow extends Component {
  render() {
    let total = this.props.item.itemPrice * this.props.item.quantity;
    return (
      <tr>
        <td>{this.props.item.itemName}</td>
        <td>{this.props.item.quantity}</td>
        <td>{this.props.item.itemPrice} KD</td>
        <td>{total} KD</td>
        <td>
          {this.props.match === "checkout" ? null : (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => this.props.removeItemFromCart(this.props.item)}
            >
              Remove
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default OrderItemRow;
