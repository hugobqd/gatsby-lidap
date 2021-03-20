import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "../Heading";
import Box from "../common/Box";
import Flex from "../common/Flex";
import { splitTitle } from "../hooks/splitTitle";

const Cell = styled(Link)`
  /* border: 2px solid red; */
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fg};
  position: relative;
  height: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors.fg};
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
        <Box p={3} pt={2}>
          <Heading as={"h3"} className="fs-45" mb={"2px"}>
            {splitTitle(title)}
          </Heading>
          <Flex>
            <div style={{ paddingLeft: "1em" }} className="fs-45"></div>
            <h5
              style={{
                fontWeight: "400",
                textTransform: "uppercase",
                letterSpacing: 0.2,
              }}
            >
              {director && director} {date && ` - ${date.getFullYear()}`}
            </h5>
          </Flex>
        </Box>
      </article>
    </Cell>
  );
};

export default ProductionCell;
