import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//architecture
import MainPage from "./components/MainPage"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import NotFoundPage from "./components/NotFoundPage";
import CounterContainer from "./containers/CounterContainer.js"

//view all
import LandsContainer from "./containers/LandsContainer";
import AttractionsContainer from "./containers/AttractionsContainer";

//attractions by land
import StarWarsContainer from "./containers/StarWarsContainer";
import FantasylandContainer from "./containers/FantasylandContainer";
import TomorrowlandContainer from "./containers/TomorrowlandContainer";
import AdventurelandContainer from "./containers/AdventurelandContainer";
import CritterCountryContainer from "./containers/CritterCountryContainer";
import FrontierlandContainer from "./containers/FrontierlandContainer";
import MainstreetUSAContainer from "./containers/MainstreetUSAContainer";
import MickeysToontownContainer from "./containers/MickeysToontownContainer";
import NolaContainer from "./containers/NolaContainer";

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
            <Route exact path='/lands/tomorrowland' render={() => <TomorrowlandContainer />} />
            <Route exact path='/lands/adventureland' render={() => <AdventurelandContainer />} />
            <Route exact path='/lands/critter-country' render={() => <CritterCountryContainer />} />
            <Route exact path='/lands/frontierland' render={() => <FrontierlandContainer />} />
            <Route exact path='/lands/mainstreet-usa' render={() => <MainstreetUSAContainer />} />
            <Route exact path='/lands/mickeys-toontown' render={() => <MickeysToontownContainer />} />
            <Route exact path='/lands/new-orleans-square' render={() => <NolaContainer />} />
            <Route exact path='/counter' render={() => <CounterContainer />} />

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
