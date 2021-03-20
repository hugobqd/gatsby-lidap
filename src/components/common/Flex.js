import styled from "styled-components";
import { color, space, layout, typography, flexbox } from "styled-system";
import Box from "./Box";

const Flex = styled.div`
  display: flex;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
`;

export default Flex;
