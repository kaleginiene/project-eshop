import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import QuantityBlock from "./QuantityBlock";

storiesOf("Quantity-component", module).add("Quantity", () => (
  <ThemeProvider theme={theme}>
    <QuantityBlock price={10} />
  </ThemeProvider>
));
