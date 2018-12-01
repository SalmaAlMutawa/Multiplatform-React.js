import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../Store/actions";

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderID: 0,
      order: {}
    };
  }
  componentDidMount() {
    const id = this.props.match.params.order_ID;
    this.setState({ orderID: id });
    const order = this.props.orders.find(order => order.id === id);
    this.setState({
      order: order
    });
    console.log("hello");
    console.log(this.state.orderID);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.orderID !== prevState.orderID) {
  //       this.setState({ orderID: this.props.match.params.order_ID });
  //     }
  //   }

  render() {
    // const id = this.state.orderID;
    // const order = this.props.orders.find(order => order.id === id);
    // console.log(order);
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <h1 className="display-4">{}</h1>
          <div className="row">
            <div className="col-6">
              <div className="CenterPage">
                <h3 className="lead">
                  <strong>Order ID: </strong>
                </h3>
                <p className="lead">
                  <strong>Date: </strong>
                </p>
                <h3 className="lead">
                  <strong>Middle Man: </strong>
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

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    orders: state.orders.orders
  };
};

export default connect(
  mapStateToProps,
  null
)(OrderDetail);
