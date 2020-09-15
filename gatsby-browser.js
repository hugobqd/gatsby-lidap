import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./src/style/theme";
import Reboot from "./src/style/Reboot";
import GlobalStyle from "./src/style/GlobalStyle";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Reboot />
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
