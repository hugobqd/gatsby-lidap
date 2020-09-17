import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/style/theme";
import Reboot from "./src/style/Reboot";
import GlobalStyle from "./src/style/GlobalStyle";
import GlobalFluid from "./src/style/GlobalFluid";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Reboot />
    <GlobalFluid />
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
