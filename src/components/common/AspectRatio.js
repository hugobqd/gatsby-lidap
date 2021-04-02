import styled from "styled-components";
import Box from "./Box";

const AspectRatio = styled(Box)`
  aspect-ratio: ${(props) => props.ratio};

  @supports not (aspect-ratio: 1) {
    padding-bottom: ${(props) => 100 / props.ratio}%;
  }
`;

export default AspectRatio;
