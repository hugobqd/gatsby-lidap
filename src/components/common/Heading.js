import styled, { css } from "styled-components";
import { typography, layout, space, color } from "styled-system";

const Heading = styled.h1`
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
  ${typography}
  ${layout}
  ${space}
  ${color}
`;

export default Heading;
