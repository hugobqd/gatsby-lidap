const colors = {
  greyDarker: "#19191F",
  lavender: "lavender",
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
  space: {
    ...spacings,
  },
};
