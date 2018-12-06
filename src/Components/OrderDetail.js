import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import MiddleMan from "./MiddleMan";

class OrderDetail extends Component {
  getSubTotal(order) {
    let subTotal = 0;
    order.middle_man.forEach(
      element => (subTotal += element.item.price * element.quantity)
    );
    return subTotal;
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const id = this.props.match.params.order_ID;
      const order = this.props.orders.find(order => +order.id === +id);

      let middles = order.middle_man;
      const middleManList = middles.map(m => {
        return <MiddleMan key={m.id} mid={m} match={this.props.match} />;
      });
      return (
        <div className="container">
          <div
            className="jumbotron"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="display-4">{}</h1>
            <div className="row">
              <div className="col-6">
                <div className="CenterPage" style={{ color: "white" }}>
                  <h3 className="lead">
                    <strong>Order ID: {order.id}</strong>
                  </h3>
                  <p className="lead">
                    <strong>Date: </strong>
                    {order.date}
                  </p>
                  <h3 className="lead">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>{middleManList}</tbody>
                      <tbody>
                        <tr>
                          <th scope="col" colSpan="2">
                            SubTotal
                          </th>
                          <td colSpan="2">{this.getSubTotal(order)} KD</td>
                        </tr>
                      </tbody>
                    </table>
                  </h3>
                  <div className="row" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(OrderDetail);
