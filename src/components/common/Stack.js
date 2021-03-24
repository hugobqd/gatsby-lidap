import styled from "styled-components";
import {
  color,
  space,
  layout,
  typography,
  grid,
  position,
} from "styled-system";

const Stack = styled.div`
  display: grid;
  gap: ${(props) => props.theme.space[props.spacing || 5]};

  ${color}
  ${space}
  ${layout}
  ${position}
  ${grid}
  ${typography}
`;

export default Stack;
