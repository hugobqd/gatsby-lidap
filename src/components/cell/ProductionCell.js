import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "../common/Heading";
import Text from "../common/Text";
import Box from "../common/Box";
import Flex from "../common/Flex";
import { splitTitle } from "../hooks/splitTitle";
import FocusOutliner from "../common/FocusOutliner";
import AspectRatio from "../common/AspectRatio";

const nbsp = "\xa0";

const Cell = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fg};
  position: relative;
  height: 100%;
  transition: background ${(props) => props.theme.transitions.link},
    color ${(props) => props.theme.transitions.link};

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    background-color: ${(props) => props.theme.colors.darker};
    outline: none;
  }
`;

const ProductionCell = ({ node, big = false, ...rest }) => {
  const { title, director } = node.frontmatter; // , vod_list
  const featuredimage = node.frontmatter.featuredimage;
  const date = new Date(node.frontmatter.date);

  return (
    <Cell to={node.fields.slug} {...rest}>
      <article
        data-id={node.id}
        style={{
          height: "100%",
        }}
      >
        <Box position="relative">
          {featuredimage && (
            <Img
              fluid={{
                ...featuredimage.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
            />
          )}
          {!featuredimage && <AspectRatio ratio=" 16 / 9" bg="lavender" />}
          {/* <Box position="absolute" left={[3, 5]} bottom="1rem" bg="white" color="dark" fontWeight="bold" px={1} className="fs-6" >
            VOD
          </Box> */}
        </Box>
        <Box px={[3, 5]} pt={[3, 4]} pb={[4, 5]}>
          <Heading
            as={"h3"}
            className={big ? "fs-2" : "fs-35"}
            mb={".1em"}
            indent
            lineHeight={0.9}
          >
            {splitTitle(title)}
          </Heading>
          <Flex>
            <Box pr="1em" className={big ? "fs-2" : "fs-35"} />
            <Text as="h5" fontWeight="normal" mb="-.3em">
              {director && director}
              {nbsp} {date && `—${nbsp}${nbsp}${date.getFullYear()}`}
            </Text>
          </Flex>
        </Box>
        <FocusOutliner inside="true" />
      </article>
    </Cell>
  );
};

export default ProductionCell;
