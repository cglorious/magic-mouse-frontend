import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//pages
import MainPage from "./pages/index"
import NotFoundPage from "./pages/404";
//resorts
import Resorts from "./pages/resorts/resorts";
import DisneylandResort from "./pages/resorts/disneyland-resort";
import DisneyworldResort from "./pages/resorts/disneyworld-resort";
import TokyoDisneyResort from "./pages/resorts/tokyo-disney-resort";
//parks
import CaAdventure from "./pages/parks/ca-adventure";
import Disneyland from "./pages/parks/disneyland";

class App extends Component {

  render() {
    return (
      <div>
      <Router>
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/resorts' render={() => <Resorts />} />
        <Route exact path='/disneyland-resort' render={() => <DisneylandResort />} />
        <Route exact path='/disneyworld-resort' render={() => <DisneyworldResort />} />
        <Route exact path='/tokyo-disney-resort' render={() => <TokyoDisneyResort />} />
        <Route exact path='/ca-adventure' render={() => <CaAdventure />} />
        <Route exact path='/disneyland' render={() => <Disneyland />} />
        <Route exact path='/404' render={() => <NotFoundPage />} />
        <Redirect to='/404' />
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
