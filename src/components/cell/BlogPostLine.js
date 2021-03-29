import React from "react";
import { Link } from "gatsby";
import Box from "../common/Box";
import Text from "../common/Text";
import FocusOutliner from "../common/FocusOutliner";
import styled from "styled-components";

const Line = styled(Box)`
  display: inline-block;
  color: ${(props) => props.theme.colors.fg};
  position: relative;
  line-height: 1.2;
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

const BlogPostLine = ({ node }) => {
  return (
    <Box>
      <Line as={Link} to={node.fields.slug} mx={-2}>
        <Box as="article" p={2}>
          <Text
            as="h3"
            fontWeight="bold"
            display="inline"
            fontStyle="italic"
            mr={[2, 3]}
          >
            {node.frontmatter.title}
          </Text>{" "}
          <Box as="time" display={["block", "inline-block"]} pt=".25em">
            {node.frontmatter.date}
          </Box>
        </Box>
        <FocusOutliner />
      </Line>
    </Box>
  );
};

export default BlogPostLine;
