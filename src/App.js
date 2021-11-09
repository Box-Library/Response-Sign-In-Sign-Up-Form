import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";

const Routing = () => {
  return (
    <Switch>
      <Route path="" exact component={Home} />
    </Switch>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routing />
      </Router>
      {/* <h1>Theebanraj Uthayakumar</h1> */}
    </>
  );
}

export default App;
