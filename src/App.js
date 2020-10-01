import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainBox from "./components/mainbox";
import Results from "./components/pages/results";
import Details from "./components/pages/details";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routing = () => {
  return (
    <Switch>
      <Route path="/items/:id">
        <Details />
      </Route>
      <Route path="/search/:text">
        <Results />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainBox />
          <Routing />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
