import styled from "styled-components";
import Box from "./Box";
import { grid } from "styled-system";

const HStack = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => `-${props.theme.space[props.spacing || 5]}`};
  > * {
    margin-top: ${(props) => props.theme.space[props.spacing || 5]};
  }
  > * + * {
    margin-left: ${(props) => props.theme.space[props.spacing || 5]};
  }
  ${grid}
`;

export default HStack;
