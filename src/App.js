import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar"
//pages
import MainPage from "./components/MainPage"
import NotFoundPage from "./pages/404";
//resorts
import Resorts from "./components/Resorts";
import DisneylandResort from "./pages/resorts/disneyland-resort";
import DisneyworldResort from "./pages/resorts/disneyworld-resort";
import TokyoDisneyResort from "./pages/resorts/tokyo-disney-resort";
//parks
import CaAdventure from "./pages/parks/ca-adventure";
import Disneyland from "./pages/parks/disneyland";
//lands
import Fantasyland from "./pages/lands/fantasyland";
import StarWars from "./pages/lands/star-wars";

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <MainPage />} />
            <Route exact path='/resorts' render={() => <Resorts />} />
            <Route exact path='/disneyland-resort' render={() => <DisneylandResort />} />
            <Route exact path='/disneyworld-resort' render={() => <DisneyworldResort />} />
            <Route exact path='/tokyo-disney-resort' render={() => <TokyoDisneyResort />} />
            <Route exact path='/ca-adventure' render={() => <CaAdventure />} />
            <Route exact path='/disneyland' render={() => <Disneyland />} />
            <Route exact path='/fantasyland' render={() => <Fantasyland />} />
            <Route exact path='/star-wars' render={() => <StarWars />} />
            <Route exact path='/404' render={() => <NotFoundPage />} />
            <Redirect to='/404' />
            </Switch>
          </Router>
          <footer>
            <br/>
            <small>Magical Memories</small>
          </footer>
      </div>
    );
  }
}

export default App;
