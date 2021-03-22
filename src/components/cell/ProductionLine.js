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
      <Flex as="article" data-id={node.id} alignItems="center" py="2px">
        <Box width="16%">
          {featuredimage && (
            <Img
              fluid={{
                ...featuredimage.childImageSharp.fluid,
                aspectRatio: 2.5,
              }}
            />
          )}{" "}
        </Box>
        <Box flex={1} px={5}>
          <Heading as={"h4"}>{title}</Heading>
        </Box>
        <Box pr={5}>
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
        </Box>
      </Flex>
    </Cell>
  );
};

export default ProductionCell;
