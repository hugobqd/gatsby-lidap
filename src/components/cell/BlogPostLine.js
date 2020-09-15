import React from "react";
import { Link } from "gatsby";
import Container from "../Container";

const BlogPostLine = ({ node }) => {
  return (
    <Container>
      <Link to={node.fields.slug} key={node.id}>
        <article>
          <h3>{node.frontmatter.title}</h3>
          <section>{node.frontmatter.date}</section>
        </article>
      </Link>
    </Container>
  );
};

export default BlogPostLine;
