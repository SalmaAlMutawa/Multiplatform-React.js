import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import "./App.css";

//Commponents
import Home from "./Components/Home";
import RegistrationForm from "./Components/RegistrationForm";
import ItemsList from "./Components/ItemsList";

class App extends Component {
  // componentWillMount() {
  //   if (this.props.user) {
  //     this.props.fetchItems();
  //   }
  // }
  render() {
    return (
      <div className="wrapper style1">
        <header className="App-header">
          <Switch>
            <Route path="/home" component={ItemsList} />
            <Route path="/(login|signup)" component={RegistrationForm} />
            <Redirect to="/home" />
          </Switch>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchItems: () => dispatch(actionCreators.fetchItems())
//   };
// };

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
