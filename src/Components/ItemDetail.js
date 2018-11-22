import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../Store/actions";

class ItemDetail extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.item_ID);
  }
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <h1 className="display-4">{this.props.item.name}</h1>
          <div className="row">
            <div className="col-6">
              <img
                className="card-img-top img-thumbnail img-fluid"
                src={this.props.item.image}
                alt={this.props.item.name}
              />
            </div>
            <div className="col-6">
              <div className="CenterPage">
                <h3 className="lead">
                  <strong>Category: </strong> {this.props.item.category}
                </h3>
                <p className="lead">
                  <strong>Description: </strong>
                  {this.props.item.description}
                </p>
                <h3 className="lead">
                  <strong>Price: </strong>
                  {this.props.item.price}
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

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    item: state.item.item
    // loading: state.rootAuthor.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: item_ID => dispatch(actionCreators.fetchItemDetail(item_ID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
