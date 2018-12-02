import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";
import OrderItemRow from "./OrderItemRow";

class MiddleMan extends Component {
  getSubTotal() {
    let subTotal = 0;
    this.props.list.forEach(
      element => (subTotal += element.itemPrice * element.quantity)
    );
    return subTotal;
  }
  render() {
    const itemsList = this.props.middleMan.map(mElement => {
      return (
        <OrderItemRow
          key={mElement.id}
          item={mElement.item}
          match={this.props.match}
        />
      );
    });
    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {itemsList}
              <tr>
                <th colSpan="3">Subtotal</th>
                <td>{this.getSubTotal()} KD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    list: state.cart.list
  };
};

export default connect(
  mapStateToProps,
  null
)(MiddleMan);
