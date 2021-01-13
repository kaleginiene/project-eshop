import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ProductCard from "./ProductCard";
import products from "../../utils/products";

storiesOf("ProductCard", module).add("ProductCard", () => (
  <ThemeProvider theme={theme}>
    <ProductCard products={products} />
  </ThemeProvider>
));
