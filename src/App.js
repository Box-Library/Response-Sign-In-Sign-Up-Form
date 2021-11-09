import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Temperature from "./components/Temperature";

// const Routing = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/Temperature" component={Temperature} />
//     </Switch>
//   );
// };

function App() {
  return (
    <>
      <Router>
        {/* <Routing /> */}
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
