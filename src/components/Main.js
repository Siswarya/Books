import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Books from "./Books/Books.container";
import Cart from "./Cart/Cart.container";
const Main = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </div>
);

export default Main;
