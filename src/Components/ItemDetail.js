import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";
import Loading from "./Loading";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.getItem(this.props.match.params.item_ID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.item_ID !== prevProps.match.params.item_ID) {
      this.props.getItem(this.props.match.params.item_ID);
    }
  }

  changeHandler(event) {
    this.setState({ quantity: event.target.value });
  }

  handleAdd() {
    const { quantity } = this.state;
    const itemOrder = {
      itemID: this.props.item.id,
      itemName: this.props.item.name,
      itemPrice: this.props.item.price,
      quantity: parseInt(quantity)
    };
    this.props.addToCart(itemOrder);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="container" style={{ color: "white" }}>
          <div
            className="jumbotron"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="display-4">
              <strong>{this.props.item.name}</strong>
            </h1>
            <div className="row">
              <div className="col-6">
                <img
                  className="card-img-top img-thumbnail img-fluid"
                  src={this.props.item.image}
                  alt={this.props.item.name}
                />
              </div>
              <div className="col-6">
                <div
                  className="CenterPage"
                  style={{
                    color: "white",
                    fontFamily: "sans-serif"
                  }}
                >
                  <h3 className="lead" style={{ lineHeight: "3" }}>
                    <strong>Category:</strong> {this.props.item.category}
                  </h3>
                  <p className="lead">
                    <strong>Description: </strong>
                    {this.props.item.description}
                  </p>
                  <h3 className="lead" style={{ lineHeight: "3" }}>
                    <strong>Price: </strong>
                    {this.props.item.price} KD
                  </h3>
                  <div className="row">
                    <form>
                      <div
                        className="form-row align-items-center"
                        style={{
                          fontSize: "18px"
                        }}
                      >
                        <div className="col-auto my-1">
                          <label className="mr-sm-2 sr-only">Preference</label>
                          <select
                            className="custom-select mr-sm-2"
                            id="inlineFormCustomSelect"
                            onChange={this.changeHandler}
                            style={{
                              backgroundColor: "rgba(0,0,0,0.2)",
                              color: "white"
                            }}
                          >
                            <option value="1">Quantity</option>
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
                  </div>
                  <button
                    className="btn btn-outline-info btn-lg float-right"
                    onClick={this.handleAdd}
                  >
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
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    item: state.item.item,
    loading: state.item.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: item_ID => dispatch(actionCreators.fetchItemDetail(item_ID)),
    addToCart: item => dispatch(actionCreators.addToCart(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
