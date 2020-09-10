import React, { useState } from "react";
import { Link } from "gatsby";
import Burger from "../icons/Burger";
import { Navbar as styles } from "./Navbar.scss";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  const toggleHamburger = () => {
    setActive(!active);
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="nav-main">
        <Link to="/" title="Logo" className="logo">
          L'image d'après
        </Link>
        <Link to="/blog" title="Logo">
          Production
        </Link>
        <Link to="/products" title="Logo">
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
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
