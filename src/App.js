import React, { Component } from "react";
import MainPage from "./pages/index"
import { Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <Route path='/' render={() => <MainPage />} />
      </div>
    );
  }
}

export default App;
