import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Box from "./Box";
import { IoPlaySharp, IoDocumentSharp } from "react-icons/io5";
import {
  color,
  space,
  layout,
  typography,
  grid,
  position,
} from "styled-system";
import FocusOutliner from "./FocusOutliner";

const StyledButton = styled("a")`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: ${(props) => props.theme.colors.bg};
  background-color: ${(props) => props.theme.colors.link};
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: ${(props) => `${props.theme.space[2]} 1.5rem`};
  border-radius: 0;
  min-height: 3rem;
  vertical-align: bottom;
  border-bottom: 1px solid transparent;
  transition: all ${(props) => props.theme.transitions.link};
  position: relative;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    color: ${(props) => props.theme.colors.bg};
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  ${color}
  ${space}
  ${layout}
  ${position}
  ${grid}
  ${typography}
`;

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton as={rest?.to ? Link : "a"} {...rest}>
      {icon === "play" && (
        <Box mr={3} ml={-1}>
          <IoPlaySharp style={{ width: "2rem", height: "2rem" }} />
        </Box>
      )}
      {icon === "file" && (
        <Box mr={3} ml={-1}>
          <IoDocumentSharp style={{ width: "1.75rem", height: "1.7rem" }} />
        </Box>
      )}
      <Box>{children}</Box>
      <FocusOutliner />
    </StyledButton>
  );
};

export default Button;

// export default Button;
