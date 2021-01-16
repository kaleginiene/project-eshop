import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { CartProvider } from "./contexts/cart.context";
import { DisplayProvider } from "./contexts/display.context";
import theme from "./theme";
import "normalize.css";

const GlobalBodyStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f8f4f1;
    color: #999999;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <DisplayProvider>
          <GlobalBodyStyle />
          <Routes />
        </DisplayProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
