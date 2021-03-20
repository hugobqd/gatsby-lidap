import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "../common/Heading";
import Box from "../common/Box";
import Flex from "../common/Flex";
import { splitTitle } from "../hooks/splitTitle";

const nbsp = "\xa0";

const Cell = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fg};
  position: relative;
  height: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    background-color: ${(props) => props.theme.colors.darker};
  }
`;

const ProductionCell = ({ node }) => {
  const { title, director } = node.frontmatter;
  const featuredimage = node.frontmatter.featuredimage;
  const date = new Date(node.frontmatter.date);

  return (
    <Cell to={node.fields.slug}>
      <article
        data-id={node.id}
        style={{
          height: "100%",
        }}
      >
        {featuredimage && (
          <Img
            fluid={{
              ...featuredimage.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
          />
        )}
        <Box px={[3, 5]} pt={[2, 3]} pb={[4, 5]}>
          <Heading as={"h3"} className="fs-45" mb={1} indent lineHeight={0.9}>
            {splitTitle(title)}
          </Heading>
          <Flex>
            <div style={{ paddingLeft: "1em" }} className="fs-45"></div>
            <Heading
              as="h5"
              style={{
                letterSpacing: 0.2,
              }}
              fontWeight="400"
            >
              {director && director}
              {nbsp}
              {nbsp}
              {date && `—${nbsp}${nbsp}${date.getFullYear()}`}
            </Heading>
          </Flex>
        </Box>
      </article>
    </Cell>
  );
};

export default ProductionCell;
