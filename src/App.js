import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//architecture
import MainPage from "./components/MainPage"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import NotFoundPage from "./components/NotFoundPage";

//view all
import LandsContainer from "./containers/LandsContainer";
import AttractionsContainer from "./containers/AttractionsContainer";

//attractions by land
import FantasylandContainer from "./containers/FantasylandContainer";
import StarWarsContainer from "./containers/StarWarsContainer";

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <MainPage />} />
            <Route exact path='/lands' render={() => <LandsContainer />} />
            <Route exact path='/all-attractions' render={() => <AttractionsContainer />} />
            <Route exact path='/lands/star-wars' render={() => <StarWarsContainer />} />
            <Route exact path='/lands/fantasyland' render={() => <FantasylandContainer />} />
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
