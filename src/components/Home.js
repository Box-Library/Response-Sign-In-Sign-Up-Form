import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <center>
        <h1>Hi there this is home page</h1>
        <h2>Theebanraj Uthayakumar</h2>

        {/* <a href="/Temperature">Temperature calculator</a> */}
        <Link to="/Temperature">Temperature</Link>
      </center>
    </div>
  );
}

export default Home;
