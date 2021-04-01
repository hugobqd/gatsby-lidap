import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import BlogPostLine from "../cell/BlogPostLine";
import Container from "../common/Container";
import Heading from "../common/Heading";
import Link from "../common/Link";
import Box from "../common/Box";

const HomeBlogList = ({ data }) => {
  const { edges: nodes } = data.allMarkdownRemark;

  return (
    <Container>
      <Link to={"/actualites"} display="inline-block" p={2} ml={-2}>
        <Heading as="h3">Actualités</Heading>
      </Link>
      <Box pl={[0, 5]}>
        {nodes &&
          nodes.map(({ node }) => (
            <BlogPostLine node={node} key={node?.fields?.slug} />
          ))}
      </Box>
    </Container>
  );
};

HomeBlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query HomeBlogListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 5
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <HomeBlogList data={data} count={count} />}
  />
);
