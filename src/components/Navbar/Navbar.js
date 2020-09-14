import React, { useState } from "react";
import { Link } from "gatsby";
import Burger from "../icons/Burger";
import "./Navbar.scss";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="nav-main">
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
      </div>
      {active && (
        <div
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
