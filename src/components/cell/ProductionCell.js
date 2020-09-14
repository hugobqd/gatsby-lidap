import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";

const Cell = styled(Link)`
  border: 2px solid red;
  display: block;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const ProductionCell = ({ node }) => {
  const { title, director } = node.frontmatter;
  const featuredimage = node.frontmatter.featuredimage.childImageSharp.fluid;
  const date = new Date(node.frontmatter.date);

  return (
    <Cell to={node.fields.slug}>
      <article data-id={node.id}>
        <Img fluid={featuredimage} />
        {/* <img src={featuredimage.src} /> */}
        {title && <h2>{title}</h2>}
        {director && <h4>{director}</h4>}
        {date && <h4>{date.getFullYear()}</h4>}
        <pre
          style={{
            background: "pink",
            fontSize: 10,
            display: "none",
          }}
        >
          {JSON.stringify(node, null, 2)}
        </pre>
      </article>
    </Cell>
  );
};

export default ProductionCell;
