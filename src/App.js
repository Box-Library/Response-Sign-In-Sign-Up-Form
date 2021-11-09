import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Temperature from "./components/Temperature";

function App() {
  return (
    <>
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Temperature" exact component={Temperature} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
