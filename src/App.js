// @ts-check
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Esta from "./pages/Esta";
import Home from "./pages/Home";
import WorldMap from "./ui/WorldMap";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <WorldMap />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vize/:county" component={Country} />
            <Route path="/upitnik" component={Contact} />
            <Route path="/esta-vize" component={Esta} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
