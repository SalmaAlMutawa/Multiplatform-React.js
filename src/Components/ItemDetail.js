import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemDetail extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <h1 className="display-4">"this.props.item.name"</h1>
          <div className="row">
            <div className="col-6">
              <img
                class="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0vf_EXkL0RKmM5718bM1M7742qvMsRCEwvoLbOeiBTACc4kJYA"
                alt="Card image cap"
              />
            </div>
            <div className="col-6">
              <div className="CenterPage">
                <h3 className="lead">
                  <strong>Category:</strong> "this.props.item.category"
                </h3>
                <p className="lead">
                  <strong>Description:</strong> "this.props.item.Description"
                </p>
                <h3 className="lead">
                  <strong>Price:</strong> "this.props.item.price"
                </h3>

                <button className="btn btn-outline-info btn-lg float-right">
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
export default ItemDetail;
