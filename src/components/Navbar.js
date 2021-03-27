import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import Box from "./common/Box";
import Flex from "./common/Flex";
import Text from "./common/Text";
import IconButton from "./common/IconButton";
import contact from "../settings/contact.json";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

import { space, typography } from "styled-system";
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
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.bg};
  }

  @media ${(props) => props.theme.bp[0]} {
    padding: 0 ${(props) => props.theme.space[2]};
    letter-spacing: 0.025em;
  }
  ${typography}
  ${space}
`;
const NavFullLink = styled(Link)`
  color: ${(props) => props.theme.colors.bg};
  position: relative;
`;

const BeforeXXS = styled("span")`
  @media (min-width: 375px) {
    display: none;
  }
`;
const AfterXXS = styled("span")`
  @media (max-width: 374px) {
    display: none;
  }
`;

const Navbar = (props) => {
  const [openFull, setOpenFull] = useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);
  const [showNav, setShowNav] = React.useState(true);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const goingDown = yPos < lastYPos;
      setShowNav(yPos < 80 || goingDown);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <header role="navigation" aria-label="main-navigation">
      <Box as="pre" fontSize={12} position="fixed" zIndex={100} display="none">
        {lastYPos}
        <br />
        {JSON.stringify(showNav ? "Up" : "Down")}
      </Box>

      <Box
        as="nav"
        justifyContent="space-evenly"
        position="fixed"
        zIndex={2}
        display={["flex", "none"]}
        right={0}
        left={0}
        bottom={0}
        bg="lavender"
        className="fs-nav"
      >
        <NavBarLink to="/" fontWeight={900} pl={2}>
          L'image d'après
          <FocusOutliner inset />
        </NavBarLink>
        <NavBarLink to="/production">
          Production
          <FocusOutliner inset />
        </NavBarLink>
        <NavBarLink to="/postproduction">
          <BeforeXXS>Postprod</BeforeXXS>
          <AfterXXS>Postproduction</AfterXXS>
          <FocusOutliner inset />
        </NavBarLink>
        <IconButton
          width={"3em"}
          data-target="navMenu"
          onClick={() => setOpenFull(!openFull)}
          aria-label="Ouvrir le menu"
          aria-haspopup="true"
          aria-controls="menu"
        >
          <Box as={VscMenu} width={"50%"} height={"50%"} />
        </IconButton>
      </Box>

      <Box as="nav" display={["none", "block"]} className="fs-nav-lg">
        <Flex
          position="fixed"
          zIndex={2}
          top={0}
          right="3.5rem"
          height="3.5rem"
          bg="lavender"
          as={motion.div}
          animate={{ y: showNav ? 0 : -100 }}
        >
          <NavBarLink to="/" fontWeight={900}>
            <Text as="span" pl={3}>
              {" "}
              L'image d'après
            </Text>
            <FocusOutliner inset />
          </NavBarLink>
          <NavBarLink to="/production">
            Production
            <FocusOutliner inset />
          </NavBarLink>
          <NavBarLink to="/postproduction">
            Postproduction
            <FocusOutliner inset />
          </NavBarLink>
        </Flex>
        <IconButton
          position="fixed"
          zIndex={2}
          top={0}
          right={0}
          width="3.5rem"
          data-target="navMenu"
          onClick={() => setOpenFull(!openFull)}
          aria-label="Ouvrir le menu"
          aria-haspopup="true"
          aria-controls="menu"
        >
          <Box
            as={VscMenu}
            width={["50%", "33.333%"]}
            height={["50%", "33.333%"]}
          />
        </IconButton>
      </Box>

      {openFull && (
        <NavFull
          id="menu"
          // role="menu"
          aria-labelledby="menubutton"
        >
          <div className="first">
            <NavFullLink
              to="/"
              style={{ textTransform: "uppercase", fontWeight: 900 }}
            >
              L'image d'après
              <FocusOutliner inset />
            </NavFullLink>
            <NavFullLink to="/a-propos">
              À propos
              <FocusOutliner inset />
            </NavFullLink>
            <NavFullLink to="/production">
              Production
              <FocusOutliner inset />
            </NavFullLink>
            <NavFullLink to="/postproduction">
              Postproduction
              <FocusOutliner inset />
            </NavFullLink>
            <NavFullLink to="/actualites">
              Actualités
              <FocusOutliner inset />
            </NavFullLink>
            <NavFullLink to="/contact">
              Contact
              <FocusOutliner inset />
            </NavFullLink>
            {/* <Link  to="/contact/examples">
              Form Examples
            </Link> */}
          </div>
          <div className="second" style={{ paddingLeft: "30%" }}>
            {contact?.facebook && (
              <NavFullLink as="a" href={contact.facebook}>
                Facebook
                <FocusOutliner inset />
              </NavFullLink>
            )}
            {contact?.vimeo && (
              <NavFullLink as="a" href={contact.vimeo}>
                Vimeo
                <FocusOutliner inset />
              </NavFullLink>
            )}
          </div>
          <Box position="absolute" top={0} right={0}>
            <IconButton
              width={"3.5rem"}
              data-target="navMenu"
              onClick={() => setOpenFull(!openFull)}
              aria-label="Ouvrir le menu"
              aria-haspopup="true"
              aria-controls="menu"
            >
              <Box as={VscChromeClose} width="40%" height="40%" />
            </IconButton>
          </Box>
        </NavFull>
      )}
    </header>
  );
};

export default Navbar;
