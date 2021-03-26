import React from "react";
import { Link } from "gatsby";
import Container from "../Container";
import Box from "../common/Box";
import Heading from "../common/Heading";
import Text from "../common/Text";
import FocusOutliner from "../common/FocusOutliner";


const BlogPostLine = ({ node }) => {
  return (
    <Link to={node.fields.slug} key={node.id}>
      <Container>
        <Box as='article' position='relative' fontStyle='italic' py={2}>
          <Text as="h3" fontWeight={900} display='inline' >
            {node.frontmatter.title}
          </Text>
          <Text as='span' mx={3}>—</Text>
          <Text as='time'>{node.frontmatter.date}</Text>
          <FocusOutliner />
        </Box>
      </Container>
    </Link>
  );
};

export default BlogPostLine;
