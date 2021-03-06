import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//architecture
import MainPage from "./components/MainPage"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import NotFoundPage from "./components/NotFoundPage";

//lands
import LandsContainer from "./containers/LandsContainer";

//attractions by land
import StarWarsContainer from "./containers/StarWarsContainer";
import FantasylandContainer from "./containers/FantasylandContainer";
import TomorrowlandContainer from "./containers/TomorrowlandContainer";
import AdventurelandContainer from "./containers/AdventurelandContainer";
import CritterCountryContainer from "./containers/CritterCountryContainer";
import FrontierlandContainer from "./containers/FrontierlandContainer";
import MainstreetContainer from "./containers/MainstreetContainer";
import MickeysToontownContainer from "./containers/MickeysToontownContainer";
import NolaContainer from "./containers/NolaContainer";

//add attraction
import AddAttractionForm from "./components/AddAttractionForm"

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <MainPage />} />
            <Route exact path='/lands' render={() => <LandsContainer />} />
            <Route exact path='/add-attraction' render={() => <AddAttractionForm />} />

            <Route exact path='/lands/star-wars' render={() => <StarWarsContainer />} />
            <Route exact path='/lands/fantasyland' render={() => <FantasylandContainer />} />
            <Route exact path='/lands/tomorrowland' render={() => <TomorrowlandContainer />} />
            <Route exact path='/lands/adventureland' render={() => <AdventurelandContainer />} />
            <Route exact path='/lands/critter-country' render={() => <CritterCountryContainer />} />
            <Route exact path='/lands/frontierland' render={() => <FrontierlandContainer />} />
            <Route exact path='/lands/mainstreet-usa' render={() => <MainstreetContainer />} />
            <Route exact path='/lands/mickeys-toontown' render={() => <MickeysToontownContainer />} />
            <Route exact path='/lands/new-orleans-square' render={() => <NolaContainer />} />

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
