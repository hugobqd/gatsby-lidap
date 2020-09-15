const colors = {
  greyDarker: "#19191F",
  lavender: "lavender",
  white: "#FFF",
};
const spacings = {
  1: ".25rem",
  2: ".5rem",
  3: "1rem",
  4: "2rem",
  5: "3rem",
  6: "5rem",
};

export default {
  font: {
    main:
      "degular, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
  color: {
    ...colors,
    fg: colors.white,
    bg: colors.greyDarker,
    link: colors.lavender,
  },
  space: {
    ...spacings,
  },
};
