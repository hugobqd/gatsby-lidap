const colors = {
  darker: "#0D0D0F",
  dark: "#19191F",
  lavender: "#BECFF4",
  white: "#FFF",
  red: "orangered",
  yellow: "yellow",
  chartreuse: "chartreuse",
};
// const spacings = [".25rem", ".5rem", "1rem", "2rem", "3rem", "5rem"];

const breakpoints = ["992px", "1920px", "3840px"];
const unit = "3.25rem";

export default {
  font: {
    main:
      "degular, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
  colors: {
    ...colors,
    fg: colors.white,
    bg: colors.dark,
    dark: colors.dark,
    darker: colors.darker,
    link: colors.lavender,
    focus: colors.chartreuse,
  },
  fontWeights: {
    light: 300,
    normal: 500,
    bold: 800,
  },
  sizes: {
    unit: unit,
    text: "39rem",
  },
  // space: [...spacings],
  space: ["0", ".25rem", ".5rem", "1rem", "2rem", unit],
  breakpoints: [...breakpoints],
  bp: [`(min-width: ${breakpoints[0]})`],
  zIndexes: {
    navBar: 10,
    navFull: 11,
  },
  transitions: {
    link: "100ms ease-in-out",
  },
};
