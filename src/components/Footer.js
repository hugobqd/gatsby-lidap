import React from "react";
import { Link } from "gatsby";
import Container from "./Container";
import contact from "../settings/contact.json";
import styled from "styled-components";

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
        <div style={{ paddingBottom: "1rem" }}>
          {contact.facebook && <a to={contact.facebook}>Facebook</a>}
          {contact.vimeo && <a to={contact.vimeo}>Vimeo</a>}
        </div>

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
