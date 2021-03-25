import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
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
    font-weight: 300;
    text-indent: 100px;
    padding-left: 1em;
    text-indent: -1em;
    line-height: 0.85;
    width: 100%
  }
  strong {
    text-transform: uppercase;
    font-weight: 900;
  }
  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    displayt: inline-block;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const HomeHero = () => {
  return (
    <Section>
      <h1>
        <Link to="/a-propos" style={{ textTransform: 'uppercase', fontWeight: 900, textIndent: 0}}>L’image d’après<FocusOutliner /></Link>
        <br />
        <Link to="/production">production<FocusOutliner /></Link> et
        <br />
        <Link to="/postproduction">postproduction<FocusOutliner /></Link>
        <br />
        <span className="word">de&nbsp;films</span> 
      </h1>
    </Section>
  );
};

export default HomeHero;
