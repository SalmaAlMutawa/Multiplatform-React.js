import React, { Component } from "react";

import { connect } from "react-redux";

// Components
import ItemCard from "./ItemCard";
// import SearchBar from "./SearchBar";
// import Loading from "./Loading";

class ItemsList extends Component {
  render() {
    // const { loading, filteredItems } = this.props;

    const itemCards = this.props.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    // if (loading) {
    //   return <Loading />;
    // } else {

    return (
      <div className="container m-3">
        <div className="row">{itemCards}</div>
      </div>
    );
    // }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    items: state.items.items,
    loading: state.items.loading
    // filteredItems: state.items.filteredItems
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
