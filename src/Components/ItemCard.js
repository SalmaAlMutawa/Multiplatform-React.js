import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemCard extends Component {
  render() {
    return (
      <div id="extra">
        <div className="container">
          <div className="row no-collapse-1">
            <section className="4u">
              {" "}
              <a to={"#"} className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <div className="box">
                <h3>Item Name</h3>
                <p>Category: cat</p>
                <p>Price: # KD</p>
                <a to={"#"} className="button">
                  Find More
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
