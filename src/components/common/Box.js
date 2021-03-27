import styled from "styled-components";
import {
  compose,
  color,
  space,
  layout,
  typography,
  flexbox,
  position,
  border,
} from "styled-system";

const Box = styled("div")(
  compose(color, space, layout, position, flexbox, typography, border)
);

export default Box;
