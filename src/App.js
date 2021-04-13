import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/index"
import UsersPage from "./pages/users";
import NotFoundPage from "./pages/404";
import DisneylandResort from "./pages/resorts/disneyland-resort";
import DisneyworldResort from "./pages/resorts/disneyworld-resort";
import TokyoDisneyResort from "./pages/resorts/tokyo-disney-resort";

class App extends Component {

  render() {
    return (
      <div>
      <Router>
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/disneyland-resort' render={() => <DisneylandResort />} />
        <Route exact path='/disneyworld-resort' render={() => <DisneyworldResort />} />
        <Route exact path='/tokyo-disney-resort' render={() => <TokyoDisneyResort />} />
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
