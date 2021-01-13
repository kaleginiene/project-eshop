import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import { ThemeProvider } from "styled-components";
import React from "react";
import Header from "./Header";
import theme from "../../theme";

storiesOf("Header", module)
  .addDecorator(StoryRouter())
  .add("Header", () => (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  ));
