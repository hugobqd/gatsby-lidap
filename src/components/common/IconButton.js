import React from "react";
import styled from "styled-components";
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
  justify-content: center;
  color: ${(props) => props.theme.colors.bg};
  background-color: ${(props) => props.theme.colors.link};
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0;
  border-radius: 0;
  vertical-align: bottom;
  transition: background ${(props) => props.theme.transitions.link}, color ${(props) => props.theme.transitions.link};
  position: relative;
  aspect-ratio: 1;

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

const IconButton = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
      <FocusOutliner inset />
    </StyledButton>
  );
};

export default IconButton;

// export default Button;
