import { Link } from "gatsby";
import React from "react";

const HomeHero = () => {
  return (
    <section
      style={{
        fontSize: "10rem",
        lineHeight: 1,
        paddingBottom: "1em",
      }}
    >
      <strong
        style={{
          textTransform: "uppercase",
          fontWeight: 900,
          display: "block",
        }}
      >
        L’image d’après
      </strong>
      <Link to="/production">production</Link>
      <br />
      et <Link to="/postproduction">postproduction</Link>
      <br />
      de films.
    </section>
  );
};

export default HomeHero;
