import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "../Heading";

const Cell = styled(Link)`
  /* border: 2px solid red; */
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fg};
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const ProductionCell = ({ node }) => {
  const { title, director } = node.frontmatter;
  const featuredimage = node.frontmatter.featuredimage;
  const date = new Date(node.frontmatter.date);

  return (
    <Cell to={node.fields.slug}>
      <article data-id={node.id}>
        {featuredimage && (
          <Img
            fluid={{
              ...featuredimage.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
          />
        )}
        {/* <img src={featuredimage.src} /> */}
        <Heading as={"h4"} mt={1}>
          {title}
        </Heading>
        {director && <h5>{director}</h5>}
        {date && <h5>{date.getFullYear()}</h5>}
      </article>
    </Cell>
  );
};

export default ProductionCell;
