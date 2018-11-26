import React, { Component } from "react";
// import { Link } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const itemList = this.props.list.map(item => {
      let count = 1;
      let x = this.props.items.find(x => x.id === item.itemID);
      return (
        <tr key={item.itemID + count + 1}>
          <td>{x.name}</td>
          <td>{item.quantity}</td>
          <td>{x.price}</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => this.props.removeItemFromCart(item)}
            >
              Remove
            </button>
          </td>
        </tr>
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
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {itemList}
              <tr>
                <th colSpan="2">Total</th>
                <td>total KD</td>
              </tr>
            </tbody>
          </table>

          <button
            className="btn btn-info"
            onClick={() => this.props.checkout(this.props.list)}
          >
            Checkout
          </button>
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
