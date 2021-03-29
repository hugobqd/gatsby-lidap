import React from "react";
import Box from "./Box";

const Text = ({ children, ...props }) => (
  <Box as="p" {...props}>
    {children}
  </Box>
);

export default Text;
