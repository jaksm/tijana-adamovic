import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Country from "./pages/Country";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vize/:county" component={Country} />
            <Route path="/kontakt" component={Contact} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
