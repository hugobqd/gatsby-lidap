import React from "react";
import { Link } from "gatsby";
import Container from "./Container";
import contact from "../settings/contact.json";
import styled from "styled-components";
import Flex from "../components/common/Flex";

const Footer = () => {
  return (
    <Container>
      <Flex py={5} justifyContent="space-between">
        <Link to="/">L'image d'après</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/production">Production</Link>
        <Link to="/postproduction">Postproduction</Link>
        <Link to="/actualites">Actualités</Link>
        <Link to="/contact">Contact</Link>
        {contact.facebook && <a href={contact.facebook}>Facebook</a>}
        {contact.vimeo && <a href={contact.vimeo}>Vimeo</a>}
      </Flex>
    </Container>
  );
};

export default Footer;
