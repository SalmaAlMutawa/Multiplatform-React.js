import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

class ItemsList extends Component {
  render() {
    const { loading, filteredItems } = this.props;

    const itemCards = filteredItems.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="container m-3">
          <SearchBar />
          <div className="row">{itemCards}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.items.loading,
    filteredItems: state.items.filteredItems
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
