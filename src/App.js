import React from "react";
import "./App.css";
import Home from "./screen/Home";
import Quiz from "./screen/Quiz";
import Header from "./screen/Header";
import Dashboard from "./screen/Dashboad";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Header />
          <Dashboard />
        </Route>
        <Route path="/quiz">
          <Header />
          <Quiz />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
