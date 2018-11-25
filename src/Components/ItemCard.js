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
                  View
                </button>
              </Link>
              <div className="row">
                <form className="form-inline">
                  <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 sr-only"
                        for="inlineFormCustomSelect"
                      >
                        Preference
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        id="inlineFormCustomSelect"
                      >
                        <option selected>Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </form>
                <button className="btn btn-outline-info btn-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
