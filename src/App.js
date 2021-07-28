import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import ShopPage from "./page/shop/shop.component";

import Homepage from "./page/homepage/homepage.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
