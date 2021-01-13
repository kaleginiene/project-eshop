import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContext } from "./contexts/cart.context";

import { Header, Loader, Footer } from "./components";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

function Routes() {
  const cart = useContext(CartContext);

  return (
    <Router>
      <Header cart={cart.items[0].price} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
