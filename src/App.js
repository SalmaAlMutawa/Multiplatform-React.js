import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import * as actionCreators from "./Store/actions";

import "./App.css";

//Commponents
import Home from "./Components/Home";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import ItemsList from "./Components/ItemsList";
import ItemDetail from "./Components/ItemDetail";
import UserProfile from "./Components/UserProfile";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
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
        <div className="container m-5">
          <TopNavBar />
          <div className="container m-5">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/signup" component={SignupForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/list" component={ItemsList} />
              <Route path="/items/:item_ID" component={ItemDetail} />
              <Route path="/profile/" component={UserProfile} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Redirect to="/home" />
            </Switch>
          </div>
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
