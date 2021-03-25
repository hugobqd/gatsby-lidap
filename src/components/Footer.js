import React from "react";
import { Link } from "gatsby";
import Container from "./Container";
import contact from "../settings/contact.json";
import styled from "styled-components";
import Box from '../components/common/Box'

const StyledFooter = styled.footer`
  text-align: center;
  a {
    display: inline-block;
    margin: 0 1em;
  }
`;

const Footer = () => {
  return (
    <StyledFooter style={{ padding: "2rem 0" }}>
      <Container>
        <Box pb={2}>
          {contact.facebook && <a href={contact.facebook}>Facebook</a>}
          {contact.vimeo && <a href={contact.vimeo}>Vimeo</a>}
        </Box>

        <Link to="/">L'image d'après</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/production">Production</Link>
        <Link to="/postproduction">Postproduction</Link>
        <Link to="/actualites">Actualités</Link>
        <Link to="/contact">Contact</Link>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
