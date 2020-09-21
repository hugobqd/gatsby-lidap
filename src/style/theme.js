const colors = {
  greyDarker: "#19191F",
  lavender: "#C5D0F4",
  white: "#FFF",
  red: "orangered",
};
const spacings = [".25rem", ".5rem", "1rem", "2rem", "3rem", "5rem"];

export default {
  font: {
    main:
      "degular, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
  colors: {
    ...colors,
    fg: colors.white,
    bg: colors.greyDarker,
    link: colors.lavender,
  },
  // space: [...spacings],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  breakpoints: ["768px", "1920px"],
  fontSizes: [13, 16, 19, 23, 27, 33, 39, 47],
};
