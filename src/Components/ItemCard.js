import React, { Component } from "react";

import { Link } from "react-router-dom";


class ItemCard extends Component {
  render() {
    return (
      <div id="extra">
        <div className="container">
          <div className="row no-collapse-1">
            <section className="4u">

              <button className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </button>
              <div className="box">
                <h3>title</h3>
                <p>{this.props.author.first_name}</p>
                <p>{this.props.author.last_name}</p>
                <button className="button">More...</button>

              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
