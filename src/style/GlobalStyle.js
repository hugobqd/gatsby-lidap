import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${(props) => props.theme.font.main};
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.fg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
  }

  blockquote {
    font-style: italic;
  }

  h1, h2, h3, h4 {
    line-height: 1
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyle;
