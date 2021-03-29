import styled from "styled-components";
import Box from "./Box";

const AspectRatio = styled(Box)`
  aspect-ratio: ${(props) => props.ratio};
`;

export default AspectRatio;
