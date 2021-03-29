import React from "react";
import Box from "./Box";
import { Link as GatsbyLink } from "gatsby";
import FocusOutliner from "./FocusOutliner";

const Link = ({children, ...props}) => {
  return (
    <Box as={GatsbyLink} position="relative" {...props}>
      {children}
      <FocusOutliner />
    </Box>)
  }

export default Link;
