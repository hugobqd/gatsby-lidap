import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Box from "./Box";

const StyledButton = styled("a")`
  display: inline-flex;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.bg};
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: ${(props) => props.theme.colors.link};
  border: 1px solid transparent;
  padding: ${(props) => `${props.theme.space[2]} ${props.theme.space[3]}`};
  font-size: 1rem;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    color: ${(props) => props.theme.colors.bg};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`;

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton as={rest?.to ? Link : "a"} {...rest}>
      {icon && <Box>ICON</Box>}
      <Box>{children}</Box>
    </StyledButton>
  );
};

export default Button;

// export default Button;
