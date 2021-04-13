import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/index"
import UsersPage from "./pages/users";
import NotFoundPage from "./pages/404";

class App extends Component {

  render() {
    return (
      <div>
      <Router>
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/users' render={() => <UsersPage />} />
        <Route exact path='/404' render={() => <NotFoundPage />} />
        <Redirect to='/404' />
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
