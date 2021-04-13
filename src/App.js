import React, { Component } from "react";
import MainPage from "../pages/index.jsx"

class App extends Component () {

  render() {
    return (
      <Router>
        <Route exact path='/' component={MainPage} />
      </Router>
    );
  }
}

export default App;
