import styled from "styled-components";
import { space, layout, position } from "styled-system";
const AspectRatio = styled.div`
  aspect-ratio: ${(props) => props.ratio};
  ${space}
  ${layout}
  ${position}
`;

export default AspectRatio;
