import React from "react";
import { Link } from "gatsby";
import Box from "../common/Box";
import Text from "../common/Text";
import FocusOutliner from "../common/FocusOutliner";
import styled from 'styled-components'

const Line = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.colors.fg};
  position: relative;
  transition: background ${(props) => props.theme.transitions.link},
    color ${(props) => props.theme.transitions.link};

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    background-color: ${(props) => props.theme.colors.darker};
    outline: none;
  }
  
`

const BlogPostLine = ({ node }) => {
  return (
    <Box>
      <Line to={node.fields.slug}>
        <Box as='article' py={2}>
          <Text as="h3" fontWeight={900} display='inline' mr={3} fontStyle='italic'>
            {node.frontmatter.title}
          </Text>
          <Text as='time'>{node.frontmatter.date}</Text>
        </Box>
        <FocusOutliner />
      </Line>
    </Box>
  );
};

export default BlogPostLine;
