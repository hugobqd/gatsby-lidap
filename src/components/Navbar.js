import React, { useState } from "react";
import { Link } from "gatsby";
import Burger from "./icons/Burger";
// import "./Navbar.scss";
import styled from "styled-components";

const Header = styled.header``;
const NavMain = styled.nav`
  background-color: lavender;
  position: absolute;
  top: 0;
  right: 0;
  text-transform: uppercase;
  display: flex;
  padding-right: 2rem;

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
    position: fixed;
    top: 0;
    right: 0;
    width: 2rem;
    z-index: 10;
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
        <nav
          id="menu"
          className={`nav-full ${active ? "is-active" : ""}`}
          role="menu"
          aria-labelledby="menubutton"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link className="navbar-item" to="/about">
            À propos
          </Link>
          <Link className="navbar-item" to="/production">
            Production
          </Link>
          <Link className="navbar-item" to="/postproduction">
            Post-Production
          </Link>
          <Link className="navbar-item" to="/actualite">
            Actualité
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link>
        </nav>
      )}
    </Header>
  );
};

export default Navbar;
