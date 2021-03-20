import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";
import fluid from "fluid-system";

// Ratios : [ 1.25, 1.4, 1.63]
const fontSizeH6 = css({ fontSize: ["14px", "16px", "18px", "36px"] });
const fontSizeH5 = css({ fontSize: ["16px", "18px", "24px", "42px"] });
const fontSizeH4 = css({ fontSize: ["20px", "22px", "36px", "50px"] });
const fontSizeH45 = css({ fontSize: ["22px", "26px", "44px", "80px"] });
const fontSizeH3 = css({ fontSize: ["25px", "32px", "54px", "100px"] });
const fontSizeH2 = css({ fontSize: ["32px", "44px", "75px", "150px"] });
const fontSizeH1 = css({ fontSize: ["40px", "62px", "170px", "340px"] });

const GlobalStyle = createGlobalStyle`

  html {
    ${fluid(fontSizeH5)}
  }

  body {
    font-family: ${(p) => p.theme.font.main};
    background-color: ${(p) => p.theme.colors.bg};
    color: ${(p) => p.theme.colors.fg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.link};
  }

  
  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
  }
  h1, h2, h3, h4, h5 {
    line-height: 1
  }
  h1, .fs-1 {
    ${fluid(fontSizeH1)}
    line-height:.8;
  }
  h2, .fs-2 {
    ${fluid(fontSizeH2)}
  }
  h3, .fs-3 {
    ${fluid(fontSizeH3)}
  }
  h4, .fs-4 {
    ${fluid(fontSizeH4)}
  }
  .fs-45 {
    ${fluid(fontSizeH45)}
  }
  h5, .fs-5 {
    ${fluid(fontSizeH5)}
  }
  h6, .fs-6 {
    ${fluid(fontSizeH6)}
  }

  img {
    max-width: 100%;
  }

  blockquote {
    border-left: .25em solid;
    padding-left: 1.75em;
    padding-top: .5em;
    padding-bottom: 1px;
    font-style: normal
  }

  // React-player :

  .react-player__preview {

    .react-player__shadow {
      background-color: ${(p) => p.theme.colors.bg} !important;
      border-radius: 0 !important;
    }
    .react-player__play-icon {
      border-left-color: ${(p) => p.theme.colors.link} !important;
    }
    &:hover, &:focus {
      .react-player__play-icon {
      border-left-color: ${(p) => p.theme.colors.fg} !important;      
    }
  }
`;

export default GlobalStyle;
