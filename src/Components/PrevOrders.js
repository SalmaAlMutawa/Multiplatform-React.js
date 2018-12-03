import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";
// import OrderItemRow from "./OrderItemRow";

class PrevOrders extends Component {
  render() {
    const ordersList = this.props.orders.map(order => (
      <tr key={order.id}>
        <td>
          {order.id}
          <Link to={`/order/${order.id}`}>
            <button className="btn btn-outline-info btn-lg mx-3 my-2">
              {order.date}
            </button>
          </Link>
        </td>
      </tr>
    ));
    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Order Dates:</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>{ordersList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    orders: state.orders.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: item_ID => dispatch(actionCreators.fetchItemDetail(item_ID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevOrders);
