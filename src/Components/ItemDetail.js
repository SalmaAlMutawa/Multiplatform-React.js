import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Details</h1>
          <p className="lead">
            <strong>Description:</strong> "this.props.item.description"
          </p>

          <p>Product details</p>

          <button className="btn btn-outline-info btn-lg">Add to Cart</button>
        </div>
      </div>
    );
  }
}
export default ItemDetail;
