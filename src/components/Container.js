import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";

const StyledContainer = styled.div`
  max-width: 95%;

  margin-left: auto;
  margin-right: auto;

  ${(props) => (props.text ? "max-width: 30rem" : null)};

  ${layout}
  ${space}
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
export default Container;
