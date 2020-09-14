import styled from "styled-components";

const Container = styled.div`
  max-width: 95%;

  margin-left: auto;
  margin-right: auto;

  ${(props) => (props.text ? "max-width: 30rem" : null)};
`;

export default Container;
