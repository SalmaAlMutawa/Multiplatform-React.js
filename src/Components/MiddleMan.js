import React, { Component } from "react";
// import { Redirect, Link } from "react-router-dom";
// import * as actionCreators from "../Store/actions";
import { connect } from "react-redux";
import OrderItemRow from "./OrderItemRow";

class MiddleMan extends Component {
  //   getSubTotal() {
  //     let subTotal = 0;
  //     this.props.list.forEach(
  //       element => (subTotal += element.itemPrice * element.quantity)
  //     );
  //     return subTotal;
  //   }
  render() {
    // const itemsList = this.props.mid.map(mElement => {
    //   return (
    //     <OrderItemRow
    //       key={mElement.id}
    //       item={mElement.item}
    //       match={this.props.match}
    //     />
    //   );
    // });
    return (
      <tr>
        <td>{this.props.mid.item.name}</td>
        <td>{this.props.mid.quantity}</td>
        <td>{this.props.mid.item.price}</td>
      </tr>
    );
  }
}

export default connect(
  null,
  null
)(MiddleMan);
