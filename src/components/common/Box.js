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
  system
} from "styled-system";

// eslint-disable-next-line
const textTransform = system({
  prop: 'textTransform',
  cssProperty: 'textTransform',
})
const Box = styled("div")(
  compose(color, space, layout, position, flexbox, typography, border),
  system({ textTransform: true}),
);

export default Box;
