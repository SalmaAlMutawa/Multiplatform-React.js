import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";
import OrderItemRow from "./OrderItemRow";

class Cart extends Component {
  getSubTotal() {
    let subTotal = 0;
    this.props.list.forEach(
      element => (subTotal += element.itemPrice * element.quantity)
    );
    return subTotal;
  }
  render() {
    const itemsList = this.props.list.map(item => {
      let count = 0;
      return (
        <OrderItemRow
          key={(count += 1)}
          item={item}
          items={this.props.items}
          removeItemFromCart={this.props.removeItemFromCart}
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
          {this.props.match === "checkout" ? null : (
            <Link to="/checkout">
              <button className="btn btn-info btn-lg">
                Proceed to Checkout
              </button>
            </Link>
          )}
        </div>
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
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item)),
    checkout: orderList => dispatch(actionCreators.checkout(orderList))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
