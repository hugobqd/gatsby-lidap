import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import contact from "../settings/contact.json";

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="footer has-background-black has-text-white-ter"
        style={{ borderTop: "10px solid" }}
      >
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
        <a
          className="navbar-item"
          href="/admin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin
        </a>
        <address style={{ display: "block" }}>{contact.adress}</address>
      </footer>
    );
  }
};

export default Footer;
