import styled from "styled-components";
import Box from "./Box";

const Container = styled(Box)`
  padding-left: ${(p) => p.theme.space[3]};
  padding-right: ${(p) => p.theme.space[3]};
  @media ${(p) => p.theme.bp[0]} {
    padding-left: ${(p) => p.theme.space[5]};
    padding-right: ${(p) => p.theme.space[5]};
  }
`;

export default Container;
