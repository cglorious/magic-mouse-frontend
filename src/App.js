import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//architecture
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

//pages
import MainPage from "./components/MainPage"
import NotFoundPage from "./components/NotFoundPage";

//container
import LandsContainer from "./containers/LandsContainer";
import AttractionsContainer from "./containers/AttractionsContainer";

//dynamic routes
import LandAttractionsContainer from "./containers/LandAttractionsContainer";

//lands
import Fantasyland from "./components/fantasyland";
import StarWars from "./components/star-wars";

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <MainPage />} />
            <Route exact path='/lands' render={() => <LandsContainer />} />
            <Route exact path='/attractions' render={() => <AttractionsContainer />} />
            <Route exact path='/lands/attractions' render={() => <LandAttractionsContainer />} />
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
