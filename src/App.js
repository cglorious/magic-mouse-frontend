import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//architecture
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

//pages
import MainPage from "./components/MainPage"
import NotFoundPage from "./components/NotFoundPage";
//resorts
import ResortsContainer from "./containers/ResortsContainer";
import ParksContainer from "./containers/ParksContainer";

import DisneylandResort from "./components/resorts/DisneylandResort";
import DisneyworldResort from "./components/resorts/DisneyworldResort";
import TokyoDisneyResort from "./components/resorts/TokyoDisneyResort";
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
            <Route exact path='/resorts' render={() => <ResortsContainer />} />
            <Route exact path='/parks' render={() => <ParksContainer />} />

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
        <Footer />
      </div>
    );
  }
}

export default App;
