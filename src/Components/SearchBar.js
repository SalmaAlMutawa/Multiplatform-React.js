import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import * as actionCreators from "../Store/actions";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={event => this.props.onSearch(event.target.value)}
            style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
          />
          <div className="input-group-append">
            <span
              className="input-group-text"
              style={{
                backgroundColor: "rgba(138,43,226,0.5)",
                color: "white"
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.filteredItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => dispatch(actionCreators.filterItems(query))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
