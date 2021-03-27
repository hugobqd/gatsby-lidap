import React from "react";
import styled, { css } from "styled-components";
import Box from "./Box";

const StyledHeading = styled(Box)`
  font-weight: 900;
  text-transform: uppercase;
  margin-top: -0.15em;
  hyphens: auto;
  @media ${(props) => props.theme.bp[0]} {
    hyphens: none;
  }

  ${(p) =>
    p.indent &&
    css`
      padding-left: 1em;
      text-indent: -1em;
      margin-left: -0.025em;
      max-width: 18ch;
    `}
`;

const Heading = ({ children, ...props }) => (
  <StyledHeading as="h1" {...props}>
    {children}
  </StyledHeading>
);

export default Heading;
