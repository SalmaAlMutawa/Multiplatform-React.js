import React, { Component } from "react";

class MiddleMan extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.mid.item.name}</td>
        <td>{this.props.mid.quantity}</td>
        <td>{this.props.mid.item.price}</td>
      </tr>
    );
  }
}

export default MiddleMan;
