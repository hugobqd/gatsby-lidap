import styled from "styled-components";
import { color, space, layout, flexbox } from "styled-system";
import Box from "./Box";

const AspectRatio = styled.div`
  aspect-ratio: ${(props) => props.ratio};
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export default AspectRatio;
