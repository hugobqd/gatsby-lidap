import React from "react";
import styled, { css } from "styled-components";
import { layout, space, typography } from "styled-system";

const Container = styled.div`
  padding-left: ${(p) => p.theme.space[3]};
  padding-right: ${(p) => p.theme.space[3]};
  @media ${(p) => p.theme.bp[0]} {
    padding-left: ${(p) => p.theme.space[5]};
    padding-right: ${(p) => p.theme.space[5]};
  }

  ${(props) =>
    props.intro &&
    css`
      max-width: 46rem;
    `}
  ${(props) =>
    props.center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
  /* ${(p) => (p.text ? "max-width: 38rem;" : null)}
  ${(p) => (p.medium ? "max-width: 64rem;" : null)} */

  ${layout}
  ${space}
  ${typography}
`;

export default Container;

// /* @media ${(p) => p.theme.bp[0]} {
//   padding-left: ${(p) => p.theme.sizes.unit};
//   padding-right: ${(p) => p.theme.sizes.unit};
// } */
