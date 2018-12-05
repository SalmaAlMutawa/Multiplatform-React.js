import React, { Component } from "react";

class ZainLogo extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          height: "100vh"
        }}
      >
        <img
          src={"https://d364xagvl9owmk.cloudfront.net/static/images/zain.gif"}
          alt="loading..."
          style={{
            display: "block",
            margin: "auto",
            width: "40%",
            paddingTop: "150px"
          }}
        />
      </div>
    );
  }
}

export default ZainLogo;
