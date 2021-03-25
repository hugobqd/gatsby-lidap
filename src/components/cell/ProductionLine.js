import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "../common/Heading";
import Box from "../common/Box";
import Flex from "../common/Flex";
import FocusOutliner from "../common/FocusOutliner";

const Cell = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fg};
  position: relative;
  height: 100%;
  transition: background ${(props) => props.theme.transitions.link}, color ${(props) => props.theme.transitions.link};

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    background-color: ${(props) => props.theme.colors.darker};
  }
`;

const ProductionLine = ({ node }) => {
  const { title, director } = node.frontmatter;
  const featuredimage = node.frontmatter.featuredimage;
  const date = new Date(node.frontmatter.date);

  return (
    <Cell to={node.fields.slug}>
      <Flex as="article" data-id={node.id} alignItems="center" py={0} >
        <Box width="16%" display={['block', 'none']}>
          {featuredimage && (
            <Img
              fluid={{
                ...featuredimage.childImageSharp.fluid,
                aspectRatio: 1,
              }}
            />
          )}
        </Box>
        <Box width="14%" display={['none', 'block']} pl={5}>
          {featuredimage && (
            <Img
              fluid={{
                ...featuredimage.childImageSharp.fluid,
                aspectRatio: 2.35,
              }}
            />
          )}
        </Box>
        <Flex as="article" data-id={node.id} alignItems="center" py="2px"  flex={1} flexWrap="wrap">
          <Box flex={1} pl={[3,4]} minWidth={'280px'} lineHeight={1.2}>
            <Heading as={"h4"}>{title}</Heading>
          </Box>
          <Box px={[3,4]} textAlign='right' py={1} minWidth={'220px'} >
            <Heading
              as="h5"
              style={{
                letterSpacing: 0.2,
              }}
              fontWeight="400"
            >
              {director && director} 
              <Box as='span' px={2}>{`—`}</Box>
              {date && date.getFullYear()}
            </Heading>
          </Box>
        </Flex>
      </Flex>
      <FocusOutliner inset/>
    </Cell>
  );
};

export default ProductionLine;
