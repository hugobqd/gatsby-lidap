import React from "react";
import { Link } from "gatsby";
import Container from "../Container";
import Box from "../Box";
import styled from "styled-components";

const Line = styled.div`
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.lavender};
  border-top: 2px solid;

  a {
    color: ${(props) => props.theme.colors.dark};
  }
`;

const BlogPostLine = ({ node }) => {
  return (
    <Link to={node.fields.slug} key={node.id}>
      <Line>
        <Box py={2}>
          <Container>
            <article>
              <h3>{node.frontmatter.title}</h3>
              <section>{node.frontmatter.date}</section>
            </article>
          </Container>
        </Box>
      </Line>
    </Link>
  );
};

export default BlogPostLine;
