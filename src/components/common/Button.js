import React from "react";
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

const StyledButton = styled("button")`
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
  transition: background ${(props) => props.theme.transitions.link},
    color ${(props) => props.theme.transitions.link};
  position: relative;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.bg};
    text-decoration: none;
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

const Icon = ({ icon }) => {
  if (icon === "play")
    return <IoPlaySharp style={{ width: "2rem", height: "2rem" }} />;
  if (icon === "file")
    return <IoDocumentSharp style={{ width: "1.75rem", height: "1.7rem" }} />;
  return icon;
};

const Button = ({ children, icon, iconEnd, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {icon && (
        <Box ml={-1} mr={3}>
          <Icon icon={icon} />
        </Box>
      )}
      <Box>{children}</Box>
      {iconEnd && (
        <Box mr={-1} ml={3}>
          <Icon icon={iconEnd} />
        </Box>
      )}
      <FocusOutliner />
    </StyledButton>
  );
};

export default Button;

// export default Button;
