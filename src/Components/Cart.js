import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <td>"item name"</td>
              <td>"quantity"</td>
              <td>"item price"</td>
              <td>
                <button>Remove</button>
              </td>
            </tbody>
            <tr>
              <th colspan="2">Total</th>
              <td>"this.props.total"</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Cart;
