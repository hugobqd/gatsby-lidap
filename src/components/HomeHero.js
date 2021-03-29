import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Box from "./common/Box";
import Container from "./common/Container";
import FocusOutliner from "./common/FocusOutliner";

const Section = styled.header`
  color: ${(props) => props.theme.colors.lavender};
  @media ${(props) => props.theme.bp[0]} {
    min-height: ${(props) => `calc( 100vh - 2 * ${props.theme.space[5]} )`}
  }
  padding-bottom: ${(props) => `calc( 2 * ${props.theme.space[5]} )`};
  display: flex;
  align-items: center;

  h1 {
    font-size: 10vw;
    font-weight: ${(props) => props.theme.fontWeights.normal};
    padding-left: 1em;
    text-indent: -1em;
    line-height: 0.85;
    width: 100%
  }

  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
    text-indent: 0;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const HomeHero = () => {
  return (
    <Container>
      <Section>
        <h1>
          <Box as={Link} to="/a-propos" textTransform='uppercase' fontWeight="bold">
            L’image d’après
            <FocusOutliner />
          </Box>
          <br />
          <Box as={Link} to="/production">production<FocusOutliner /></Box> et
          <br />
          <Box as={Link} to="/postproduction">postproduction<FocusOutliner /></Box>
          <br />
          de&nbsp;films
        </h1>
      </Section>
    </Container>
  );
};

export default HomeHero;
