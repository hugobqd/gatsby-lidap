import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";
import useXYfromNumberOrObject from "../hooks/useXYfromNumberOrObject";

const StyledRow = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  margin-top: ${(props) => useXYfromNumberOrObject(props.gap, "y", -1)}rem;
  margin-left: ${(props) => useXYfromNumberOrObject(props.gap, "x", -0.5)}rem;
  margin-right: ${(props) => useXYfromNumberOrObject(props.gap, "x", -0.5)}rem;
  ${layout}
  ${space}

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    margin-top: ${(props) => useXYfromNumberOrObject(props.gap, "y", 1)}rem;
    padding-left: ${(props) => useXYfromNumberOrObject(props.gap, "x", 0.5)}rem;
    padding-right: ${(props) =>
      useXYfromNumberOrObject(props.gap, "x", 0.5)}rem;
  }
`;

const StyledCol = styled.div`
  /* flex: 1 0 0%; */
  flex: ${(props) => (props.span ? "0 0 auto;" : "1 0 0%")};
  /* width: ${(props) => (props.half ? "50%" : "auto")}; */
  width: ${(props) => (props.span ? `${(props.span / 12) * 100}%` : "auto")};

  ${layout}
  ${space} /* ${(props) =>
    props.red ? "background: red;" : "background: yellow;"}; */
`;

export const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};
export const Col = ({ children, ...rest }) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};

Row.defaultProps = {
  gap: 0,
};
