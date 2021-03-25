import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Box from "./common/Box";
import Flex from "./common/Flex";
import IconButton from "./common/IconButton";
import contact from "../settings/contact.json";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

import {
  space,
  typography,
  
} from "styled-system";
import FocusOutliner from "./common/FocusOutliner";

const NavFull = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.lavender};
  z-index: ${(p) => p.theme.zIndexes.navFull};
  display: flex;
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.dark};
    display: block;
  }
  .first {
    font-size: 3rem;
  }
  .second {
    font-size: 1.5rem;
  }
`;

const NavBarLink = styled(Link)`
  color: ${(props) => props.theme.colors.bg};
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.space[1]};
  text-transform: uppercase;
  position: relative;
  &:hover, &:focus {
    color: ${(props) => props.theme.colors.bg};
  }

  @media ${(props) => props.theme.bp[0]} {
    padding: 0 ${(props) => props.theme.space[3]};
    letter-spacing: 0.025em;
  }
  ${typography}
  ${space}
`
const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.bg};
  position: relative;
`

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <header role="navigation" aria-label="main-navigation">

      <Flex
        as='nav'
        justifyContent='space-evenly'
        position='fixed'
        top={['auto', 0]}
        right={[0]}
        left={[0, 'auto']}
        bottom={[0, 'auto']}
        bg='lavender'
        className='fs-nav'
        zIndex={2}
      >
        <NavBarLink to="/" fontWeight={900} pl={[2,4]}>
          L'image d'après
          <FocusOutliner inset />
        </NavBarLink>
        <NavBarLink to="/production">Production<FocusOutliner inset /></NavBarLink>
        <NavBarLink to="/postproduction">Postproduction<FocusOutliner inset /></NavBarLink>
        <IconButton
          width={['2.5rem', '3.5rem']}
          data-target="navMenu"
          onClick={() => setActive(!active)}
          aria-label="Ouvrir le menu"
          aria-haspopup="true"
          aria-controls="menu"
        >
          <Box as={VscMenu} width={['50%', '33.333%']} height={['50%', '33.333%']} />
        </IconButton>
      </Flex>

      {active && (
        <NavFull
          id="menu"
          className={`nav-full ${active ? "is-active" : ""}`}
          // role="menu"
          aria-labelledby="menubutton"
        >
          <div className="first">
            <NavLink
              to="/"
              style={{ textTransform: "uppercase", fontWeight: 900 }}
            >
              L'image d'après
              <FocusOutliner inset />
            </NavLink>
            <NavLink to="/a-propos">À propos<FocusOutliner inset /></NavLink>
            <NavLink to="/production">Production<FocusOutliner inset /></NavLink>
            <NavLink to="/postproduction">Postproduction<FocusOutliner inset /></NavLink>
            <NavLink to="/actualites">Actualités<FocusOutliner inset /></NavLink>
            <NavLink to="/contact">Contact<FocusOutliner inset /></NavLink>
            {/* <Link  to="/contact/examples">
              Form Examples
            </Link> */}
          </div>
          <div className="second" style={{ paddingLeft: "30%" }}>
            {contact?.facebook && <NavLink as='a' href={contact.facebook}>Facebook<FocusOutliner inset /></NavLink>}
            {contact?.vimeo && <NavLink as='a' href={contact.vimeo}>Vimeo<FocusOutliner inset /></NavLink>}
          </div>
          <Box position='absolute' top={0} right={0}>
            <IconButton
              width={'3.5rem'}
              data-target="navMenu"
              onClick={() => setActive(!active)}
              aria-label="Ouvrir le menu"
              aria-haspopup="true"
              aria-controls="menu"
            >
              <Box as={VscChromeClose} width='40%' height='40%' />
            </IconButton>
          </Box>
        </NavFull>
      )}
    </header>
  );
};

export default Navbar;
