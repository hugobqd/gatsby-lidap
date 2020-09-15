import React from "react";
import { Link } from "gatsby";
import Container from "../Container";
import Box from "../Box";

const BlogPostLine = ({ node }) => {
  return (
    <Link to={node.fields.slug} key={node.id}>
      <Box py={2}>
        <Container>
          <article>
            <h3>{node.frontmatter.title}</h3>
            <section>{node.frontmatter.date}</section>
          </article>
        </Container>
      </Box>
    </Link>
  );
};

export default BlogPostLine;
