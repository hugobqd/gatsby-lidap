import styled from "styled-components";
import { color, space, layout, typography, grid } from "styled-system";

const Grid = styled.div`
  display: grid;
  ${color}
  ${space}
  ${layout}
  ${grid}
  ${typography}
`;

export default Grid;

// const Grid2 = styled.div`
//   grid-template-columns: repeat(1, 1fr);
//   @media ${bp.tablet} {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media ${bp.laptop} {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   content: "toto";
//   ${space}
//   ${layout}
//   ${color}
// `;
