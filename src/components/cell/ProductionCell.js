import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "../Heading";
import Box from "../common/Box";
import Flex from "../common/Flex";

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
        <Box p={2}>
          <Heading as={"h4"} style={{ maxWidth: "9em" }} className="fs-45">
            {title}
          </Heading>
          <Flex p={3}>
            <div style={{ paddingLeft: "1em" }} className="fs-45"></div>
            <h5>
              {director && director} {date && date.getFullYear()}
            </h5>
          </Flex>
        </Box>
      </article>
    </Cell>
  );
};

export default ProductionCell;
