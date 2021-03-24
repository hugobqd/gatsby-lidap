import styled from "styled-components";
import {
  color,
  space,
  layout,
  typography,
  grid,
  position,
} from "styled-system";

const Grid = styled.div`
  display: grid;

  ${color}
  ${space}
  ${layout}
  ${grid}
  ${typography}
  ${position}
`;

export default Grid;
