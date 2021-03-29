import React from "react";
import Container from "./common/Container";
import contact from "../settings/contact.json";
import Flex from "../components/common/Flex";
import Link from "../components/common/Link";

const Footer = () => {
  return (
    <Container style={{textTransform: 'uppercase', letterSpacing: '.05em'}} className='fs-6'>
      <Flex py={5} justifyContent="space-between">
        <Link p={1} to="/">L'image d'après</Link>
        <Link p={1} to="/a-propos">À propos</Link>
        <Link p={1} to="/production">Production</Link>
        <Link p={1} to="/postproduction">Postproduction</Link>
        <Link p={1} to="/actualites">Actualités</Link>
        <Link p={1} to="/contact">Contact</Link>
        {contact.facebook && <Link as='a' p={1} href={contact.facebook}>Facebook</Link>}
        {contact.vimeo && <Link as='a' p={1} href={contact.vimeo}>Vimeo</Link>}
      </Flex>
    </Container>
  );
};

export default Footer;
