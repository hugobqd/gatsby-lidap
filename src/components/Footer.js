import React from "react";
import { Link } from "gatsby";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";

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
        <address style={{ display: "block", border: "1px dotted" }}>
          {contact.adress}
        </address>

        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </footer>
    );
  }
};

export default Footer;
