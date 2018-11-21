import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <div
        className="jumbotron"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>this.props.item.name</td>
                <td>this.props.item.quantity</td>
                <td>this.props.item.price</td>
                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Remove
                  </button>
                </td>
              </tr>

              <tr>
                <td>item.name</td>
                <td>item.quantity</td>
                <td>item.price</td>
                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Remove
                  </button>
                </td>
              </tr>

              <tr>
                <th colspan="2">Total</th>
                <td>total KD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Cart;
