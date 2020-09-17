import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";
import fluid from "fluid-system";

const FluidText = styled("h1")(fluid(typography));

const Heading = ({ children }) => {
  return (
    <FluidText
      fontSize={["30px", "50px", "170px"]}
      style={{ textTransform: "uppercase" }}
    >
      <span>{children}</span>
    </FluidText>
  );
};

export default Heading;
