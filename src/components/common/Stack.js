import styled from "styled-components";
import Box from "./Box";
import { grid } from "styled-system";

const Stack = styled(Box)`
  display: grid;
  gap: ${(props) => props.theme.space[props.spacing || 5]};
  ${grid}
`;

export default Stack;
