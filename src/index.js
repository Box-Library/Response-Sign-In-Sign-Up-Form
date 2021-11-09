// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage, Aboutpage } from "./App";
import Temperature from "./components/Temperature";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={Aboutpage} />
      <Route exact path="/Temperature" component={Temperature} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
