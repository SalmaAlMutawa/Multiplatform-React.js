import React, { Component } from "react";

import { Link } from "react-router-dom";

class ItemCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card my-2">
          <div className="card-header">{this.props.item.category}</div>
          <div className="card-body">
            <img
              className="card-img-top"
              src={this.props.item.image}
              alt={this.props.item.name}
            />
            <h3 className="card-title">{this.props.item.name}</h3>
            <p className="card-text">Price: {this.props.item.price} KD</p>
            <div className="text-center">
              <Link to={`/items/${this.props.item.id}`}>
                <button className="btn btn-outline-info btn-lg mx-3">
                  More..
                </button>
              </Link>
              <button className="btn btn-outline-info btn-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
