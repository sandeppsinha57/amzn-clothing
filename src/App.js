import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Homepage from "./page/homepage/homepage.component";

function Hats() {
  return (
    <div>
      <h1>HATS are coool...........</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={Hats} />
    </div>
  );
}

export default App;
