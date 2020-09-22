import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";
import fluid from "fluid-system";

const FluidText = styled("h1")(fluid(typography));

const Heading = ({ children, style }) => {
  // const CustomTag = `h${6}`;
  return (
    <div style={style}>
      {/* <CustomTag>Hello</CustomTag> */}
      <FluidText
        fontSize={["30px", "50px", "170px"]}
        style={{ textTransform: "uppercase", lineHeight: 0.9 }}
      >
        <span>{children}</span>
      </FluidText>
    </div>
  );
};

export default Heading;
