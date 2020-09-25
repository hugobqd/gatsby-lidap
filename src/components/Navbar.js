import React, { useState } from "react";
import { Link } from "gatsby";
import Burger from "./icons/Burger";
// import "./Navbar.scss";
import styled from "styled-components";
import { breakpoints as bp } from "../style/breakpoints";

const Header = styled.header``;
const NavMain = styled.nav`
  background-color: lavender;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  padding-right: 2rem;
  @media ${bp.laptop} {
    position: absolute;
    top: 0;
    width: auto;
    bottom: auto;
  }

  a {
    color: black;
    display: block;
    padding: 1em;
  }
  .logo {
    font-weight: 900;
  }
  .burger {
    background-color: lavender;
    border: none;
    /* position: fixed; */
    width: 2rem;
    @media ${bp.laptop} {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10;
    }
  }
`;
const NavFull = styled.nav`
  @media ${bp.laptop} {
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  background-color: ${(props) => props.theme.colors.lavender};
  z-index: 9;

  a {
    color: ${(props) => props.theme.colors.dark};
    display: block;
  }
`;

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <Header role="navigation" aria-label="main-navigation">
      <NavMain>
        <Link to="/" title="Logo" className="logo">
          L'image d'après
        </Link>
        <Link to="/production" title="Logo">
          Production
        </Link>
        <Link to="/postproduction" title="Logo">
          Post-production
        </Link>
        <button
          className={`burger ${active ? "is-active" : ""}`}
          data-target="navMenu"
          onClick={() => setActive(!active)}
          aria-label="Ouvrir le menu"
          aria-haspopup="true"
          aria-controls="menu"
          id="menubutton"
        >
          <Burger />
        </button>
      </NavMain>
      {active && (
        <NavFull
          id="menu"
          className={`nav-full ${active ? "is-active" : ""}`}
          // role="menu"
          aria-labelledby="menubutton"
        >
          <Link className="navbar-item" to="/a-propos">
            À propos
          </Link>
          <Link className="navbar-item" to="/production">
            Production
          </Link>
          <Link className="navbar-item" to="/postproduction">
            Post-Production
          </Link>
          <Link className="navbar-item" to="/actualites">
            Actualité
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link>
        </NavFull>
      )}
    </Header>
  );
};

export default Navbar;
