import styled from "styled-components";
import {
  color,
  space,
  layout,
  typography,
  grid,
  position,
} from "styled-system";

const HStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => `-${props.theme.space[props.spacing || 5]}`};
  > * {
    margin-top: ${(props) => props.theme.space[props.spacing || 5]};
  }
  > * + * {
    margin-left: ${(props) => props.theme.space[props.spacing || 5]};
  }

  ${color}
  ${space}
  ${layout}
  ${position}
  ${grid}
  ${typography}
`;

export default HStack;
