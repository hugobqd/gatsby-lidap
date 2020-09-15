import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${(props) => props.theme.font.main};
    background-color: ${(props) => props.theme.color.bg};
    color: ${(props) => props.theme.color.fg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }

  blockquote {
    font-style: italic;
  }

`;

export default GlobalStyle;
