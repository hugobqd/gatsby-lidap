import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  color: ${(props) => props.theme.colors.lavender};
  min-height: ${(props) => `calc( 100vh - 2 * ${props.theme.space[5]} )`};
  padding-bottom: ${(props) => `calc( 2 * ${props.theme.space[5]} )`};
  display: flex;
  align-items: center;
  border-bottom: 1px dotted;

  h1 {
    /* font-size: 9vw; */
    font-weight: 300;
    text-indent: 100px;
    padding-left: 1em;
    text-indent: -1em;
    line-height: 0.85;
  }
  strong {
    text-transform: uppercase;
    font-weight: 900;
  }
  a,
  .word {
    /* background-color: orange; */
    /* display: inline-block;
    line-height: 0.67;
    height: 0.9em;
    vertical-align: baseline;
    overflow: hidden;
    text-indent: 0; */
  }
  a {
    color: #fff;
    text-decoration: none;

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
        <strong>
          <Link to="/a-propos">L’image d’après</Link>
        </strong>
        <br />
        <span>
          <Link to="/production">production</Link>{" "}
          <span className="word"> et</span>{" "}
          <Link to="/postproduction">postproduction</Link>{" "}
          <span className="word">de&nbsp;films</span>
        </span>
      </h1>
    </Section>
  );
};

export default HomeHero;
