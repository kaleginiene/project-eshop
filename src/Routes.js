import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContext } from "./contexts/cart.context";
import { DisplayContext } from "./contexts/display.context";
import { Header, Loader, Footer } from "./components";

const Home = lazy(() => import("./pages/Home/Home"));

function priceSum(cart) {
  if (cart && cart !== undefined) {
    const pricePerObject = cart.items.map((item) => {
      return item.price * item.quantity;
    });
    return pricePerObject.reduce((a, v) => a + v, 0);
  } else {
    return 0;
  }
}

function Routes() {
  const cartProducts = useContext(CartContext);
  const showCartList = useContext(DisplayContext);

  return (
    <Router>
      <Header
        cart={cartProducts.items.length > 0 ? priceSum(cartProducts) : 0}
        quantity={cartProducts.items.length}
        handleClick={() => {
          showCartList.setState(!showCartList.state);
        }}
      />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
