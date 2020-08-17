import React from 'react';
import './App.css';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" >
          <Books/>
        </Route>
        <Route exact path="/saved">
          <Books/>
        <Route/>
        <Route exact path="/search"/>
          <Detail/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
