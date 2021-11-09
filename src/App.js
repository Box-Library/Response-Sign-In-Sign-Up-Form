// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Home from "./components/Home";
// import Temperature from "./components/Temperature";

// const Routing = () => {
//   return (
//     <Switch>
//       {/* <Link t="/" component={Home} /> */}
//       <Link to="/Home">Home</Link>
//       {/* <Link to="/Temperature">Temperature</Link> */}
//       {/* <Link exact path="/Temperature" component={Temperature} /> */}
//     </Switch>
//   );
// };

// function App() {
//   return (
//     <>
//       <Router>
//         <Routing />
//       </Router>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>Header</p>
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <Header />
      <h1>Homepage </h1>
      <Link to="/about">Go to Aboutpage</Link>
      <Link to="/Temperature">Go to Temperature</Link>
    </div>
  );
};

const Aboutpage = () => {
  return (
    <div>
      <Header />
      <h1>Aboutpage</h1>
      <Link to="/">Go to Aboutpage</Link>
    </div>
  );
};
export { Homepage, Aboutpage };
