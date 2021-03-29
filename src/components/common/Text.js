import React from "react";
import Box from "./Box";

const Text = ({children, ...props}) => <Box as="p" {...props}>
  {console.log(props)}{children}</Box>

export default Text;
