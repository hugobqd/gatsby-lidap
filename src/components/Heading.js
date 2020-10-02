import React from "react";
import styled from "styled-components";
import { typography, layout, space } from "styled-system";
// import fluid from "fluid-system";

// const FluidText = styled("h1")(fluid(typography));

const HeadingStyled = styled.div`
  line-height: 0.85;
  font-weight: 900;

  ${(p) => (!p.blog ? "text-transform: uppercase;" : "")}
`;

const Heading = ({ children, style, as, ...rest }) => {
  return (
    <>
      <HeadingStyled as={as || "h1"} {...rest}>
        <span>{children}</span>
      </HeadingStyled>
    </>
  );
};

export default Heading;
