import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import products from "../../utils/products";
import CartProduct from "./CartProduct";

storiesOf("CartProduct", module).add("Cart-product", () => (
  <ThemeProvider theme={theme}>
    <CartProduct products={products} />
  </ThemeProvider>
));
