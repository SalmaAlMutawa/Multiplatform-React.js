import React, { Component } from "react";
import authors from "../data";

// import { connect } from "react-redux";

// Components
import ItemCard from "./ItemCard";
// import SearchBar from "./SearchBar";
// import Loading from "./Loading";

class ItemsList extends Component {
  render() {
    // const { loading, filteredItems } = this.props;

    const itemCards = authors.map(author => (
      <ItemCard
        key={author.first_name + author.last_name + author.imageUrl}
        author={author}
      />
    ));

    // if (loading) {
    //   return <Loading />;
    // } else {

    return (
      <div className="container-responsive">
        <div className="row">{itemCards}</div>
      </div>
    );
    // }
  }
}

// const mapStateToProps = state => {
//   return {

//     user: state.auth.user,
//     items: state.items.items,
//     loading: state.items.loading,
//     filteredItems: state.items.filteredItems
//   };
// };

// export default connect(mapStateToProps)(ItemsList);
export default ItemsList;
