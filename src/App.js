import React, { Component } from "react";

//Components
import Home from "./Components/Home";
import TopNavBar from "./Components/Navigation/TopNavBar";
import CardItem from "./Components/CardItem";
import UserProfile from "./Components/UserProfile";
import ItemDetail from "./Components/ItemDetail";
import Cart from "./Components/Cart";

class App extends Component {
  render() {
    return (
      <div className="wrapper style1">
        <TopNavBar />
        <Cart />
      </div>
    );
  }
}

export default App;
