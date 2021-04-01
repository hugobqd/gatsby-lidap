import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { IoLogoVimeo, IoLogoFacebook, IoMailSharp } from "react-icons/io5";
import { space, typography } from "styled-system";
import Box from "./common/Box";
import Flex from "./common/Flex";
import Text from "./common/Text";
import IconButton from "./common/IconButton";
import FocusOutliner from "./common/FocusOutliner";
import Container from "./common/Container";
import contact from "../settings/contact.json";

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
  ${space}
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
  &[aria-current="page"] {
    text-decoration: underline;
  }

  @media ${(props) => props.theme.bp[0]} {
    padding: 0 ${(props) => props.theme.space[2]};
    letter-spacing: 0.025em;
  }
  ${typography}
  ${space}
`;
const SkipLink = styled("a")`
  color: ${(props) => props.theme.colors.bg};
  background-color: ${(props) => props.theme.colors.lavender};
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.space[1]};
  text-transform: uppercase;
  position: absolute;
  left: -9999px;
  height: 100%;
  transform: translateX(-100%);
  &:focus {
    left: 0;
  }

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
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.darker};
  }
  position: relative;
  display: inline-block;
  &[aria-current="page"] {
    text-decoration: underline;
  }
  ${typography}
  ${space}
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

const Navbar = ({ location }) => {
  const [openFull, setOpenFull] = useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);
  const [showNav, setShowNav] = React.useState(true);

  const closeIfCurrent = (to) => {
    if (to === location.pathname) {
      setOpenFull(false);
    }
  };

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window?.scrollY;
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
        <NavBarLink to="/" fontWeight="bold" pl={2}>
          L'image d'après
          <FocusOutliner inside="true" />
        </NavBarLink>
        <NavBarLink to="/production">
          Production
          <FocusOutliner inside="true" />
        </NavBarLink>
        <NavBarLink to="/postproduction">
          <BeforeXXS>Postprod</BeforeXXS>
          <AfterXXS>Postproduction</AfterXXS>
          <FocusOutliner inside="true" />
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
          right="3.25rem"
          height="3.25rem"
          bg="lavender"
          as={motion.div}
          animate={{ y: showNav ? 0 : -100 }}
          transition={{ ease: "easeInOut", duration: 0.15 }}
        >
          <SkipLink as="a" href="#content" className="skip-link">
            <Text as="span" pl={3}>
              Aller au contenu principal
            </Text>
            <FocusOutliner inside="true" />
          </SkipLink>
          <NavBarLink to="/" fontWeight="bold">
            <Text as="span" pl={3}>
              L'image d'après
            </Text>
            <FocusOutliner inside="true" />
          </NavBarLink>
          <NavBarLink to="/production">
            Production
            <FocusOutliner inside="true" />
          </NavBarLink>
          <NavBarLink to="/postproduction">
            Postproduction
            <FocusOutliner inside="true" />
          </NavBarLink>
        </Flex>
        <IconButton
          position="fixed"
          zIndex={2}
          top={0}
          right={0}
          width="3.25rem"
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
        <NavFull>
          <Container width="100%">
            {/* <Grid gridTemplateColumns={["1fr", "2fr 1fr"]} gridGap={5} bg='orchid' alignItems='end'> */}
            <Flex alignItems="flex-end" flexWrap="wrap">
              <Box className="fs-2" flex={1}>
                <Flex
                  flexDirection="column"
                  alignItems="self-start"
                  lineHeight={"calc(0.6em + 6vh)"}
                >
                  <NavFullLink
                    to="/"
                    style={{ textTransform: "uppercase" }}
                    fontWeight="bold"
                    pr={[3, 5]}
                  >
                    L'image d'après
                    <FocusOutliner />
                  </NavFullLink>
                  <NavFullLink
                    px={[3, 5]}
                    to="/a-propos"
                    onClick={() => closeIfCurrent("/a-propos")}
                  >
                    À propos
                    <FocusOutliner />
                  </NavFullLink>
                  <NavFullLink
                    px={[3, 5]}
                    to="/production"
                    onClick={() => closeIfCurrent("/production")}
                  >
                    Production
                    <FocusOutliner />
                  </NavFullLink>
                  <NavFullLink
                    px={[3, 5]}
                    to="/postproduction"
                    onClick={() => closeIfCurrent("/postproduction")}
                  >
                    Postproduction
                    <FocusOutliner />
                  </NavFullLink>
                  <NavFullLink
                    px={[3, 5]}
                    to="/actualites"
                    onClick={() => closeIfCurrent("/actualites")}
                  >
                    Actualités
                    <FocusOutliner />
                  </NavFullLink>
                  <NavFullLink
                    px={[3, 5]}
                    to="/contact"
                    onClick={() => closeIfCurrent("/contact")}
                  >
                    Contact
                    <FocusOutliner />
                  </NavFullLink>
                </Flex>
                {/* <Link  to="/contact/examples">
                  Form Examples
                </Link> */}
              </Box>
              <Flex
                className="fs-4"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box pb={1} pr={[0, 5]} mt={3}>
                  {contact?.facebook && (
                    <Box>
                      <NavFullLink as="a" px={3} href={contact.facebook}>
                        <Box as={IoLogoFacebook} mr={3} mt="-.18em" />
                        Facebook
                        <FocusOutliner />
                      </NavFullLink>
                    </Box>
                  )}
                  {contact?.vimeo && (
                    <Box>
                      <NavFullLink as="a" px={3} href={contact.vimeo}>
                        <Box as={IoLogoVimeo} mr={3} mt="-.18em" />
                        Vimeo
                        <FocusOutliner />
                      </NavFullLink>
                    </Box>
                  )}
                  <Box>
                    <NavFullLink
                      as="a"
                      px={3}
                      href="https://vimeo.com/showcase/vod"
                      aria-label="V O D"
                    >
                      <Box as={IoLogoVimeo} mr={3} mt="-.18em" />
                      VOD
                      <FocusOutliner />
                    </NavFullLink>
                  </Box>
                  <Box>
                    <NavFullLink as={Link} px={3} to="/newsletter">
                      <Box as={IoMailSharp} mr={3} mt="-.18em" />
                      Newsletter
                      <FocusOutliner />
                    </NavFullLink>
                  </Box>
                  <Box>
                    <NavFullLink
                      as={Link}
                      px={3}
                      to="/mentions"
                      className="fs-6"
                    >
                      Mentions légales
                      <FocusOutliner />
                    </NavFullLink>
                  </Box>
                </Box>
              </Flex>
              <Box position="absolute" top={0} right={0}>
                <IconButton
                  width={"3.25rem"}
                  data-target="navMenu"
                  onClick={() => setOpenFull(!openFull)}
                  aria-label="Ouvrir le menu"
                  aria-haspopup="true"
                  aria-controls="menu"
                >
                  <Box as={VscChromeClose} width="40%" height="40%" />
                </IconButton>
              </Box>
            </Flex>
          </Container>
        </NavFull>
      )}
    </header>
  );
};

export default Navbar;
