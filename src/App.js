import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import * as actionCreators from "./Store/actions";

import "./App.css";

//Commponents
import Home from "./Components/Home";
import RegistrationForm from "./Components/RegistrationForm";
import ItemsList from "./Components/ItemsList";
import ItemDetail from "./Components/ItemDetail";
import UserProfile from "./Components/UserProfile";
import Cart from "./Components/Cart";
import TopNavBar from "./Components/Navigation/TopNavBar";

class App extends Component {
  componentWillMount() {
    // if (this.props.user) {
    this.props.fetchItems();
    // }
  }
  render() {
    return (
      <div className="App-header">
        <div className="container">
          <TopNavBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/(login|signup)" component={RegistrationForm} />
            <Route path="/list" component={ItemsList} />
            <Route path="/items/:item_ID" component={ItemDetail} />
            <Route path="/profile/:name" component={UserProfile} />
            <Route path="/cart" component={Cart} />

            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(actionCreators.fetchItems())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
