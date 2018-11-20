import React, { Component } from "react";

//Components
import Home from "./Components/Home";
import TopNavBar from "./Components/Navigation/TopNavBar";
import CardItem from "./Components/CardItem";

class App extends Component {
  render() {
    return (
      <div className="wrapper style1">
        <TopNavBar />
        <Home />
      </div>
    );
  }
}

export default App;
