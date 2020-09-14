import { createGlobalStyle } from "styled-components";

// const theme = {
//   greyDarker: "#19191F",
//   lavender: "lavender",
//   white: "#FFF",
// };

const GlobalStyle = createGlobalStyle`
  body {
    /* color: ${(props) => (props.whiteColor ? "white" : "black")}; */
    font-family: "degular", -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    background-color: #19191F;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: lavender;
  }
`;

export default GlobalStyle;
