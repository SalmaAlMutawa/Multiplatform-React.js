import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";

class PrevOrders extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchOrders();
    }
  }
  render() {
    const ordersList = this.props.orders.map(order => (
      <tr key={order.id}>
        <td>
          <Link to={`/order/${order.id}`}>
            <button className="btn btn-outline-primary btn-lg mx-3 my-2">
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
          <table className="table">
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
    getItem: item_ID => dispatch(actionCreators.fetchItemDetail(item_ID)),
    fetchOrders: () => dispatch(actionCreators.fetchOrders())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevOrders);
