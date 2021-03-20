import React from "react";
import styled, { css } from "styled-components";
import { typography, layout, space } from "styled-system";
// import fluid from "fluid-system";

// const FluidText = styled("h1")(fluid(typography));

const HeadingStyled = styled.div`
  font-weight: 900;

  ${(p) =>
    p.blog
      ? css``
      : css`
          text-transform: uppercase;
          padding-left: 1em;
          text-indent: -1em;
          margin-left: -0.05em;
        `}
  ${typography}
  ${layout}
  ${space}
`;

const Heading = ({ children, as, ...rest }) => {
  return (
    <>
      <HeadingStyled as={as || "h1"} {...rest}>
        <span>{children}</span>
      </HeadingStyled>
    </>
  );
};

export default Heading;
