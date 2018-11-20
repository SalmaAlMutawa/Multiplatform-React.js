import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemDetail extends Component {
  render() {
    return (
      <div className="wrapper style1">
        <div id="banner" className="container">
          <p>
            I'm thinking the product's picture will be on the left side, anf the
            item details will be on the right side
          </p>
          <h2>Item Name</h2>
          <h3>Description</h3>
          <h3>Category</h3>
          <h3>Price</h3>
        </div>
      </div>
    );
  }
}
export default ItemDetail;
