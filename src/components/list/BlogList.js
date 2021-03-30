import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import BlogPostLine from "../cell/BlogPostLine";
import Container from "../common/Container";
import Heading from "../common/Heading";
import Link from "../common/Link";

const BlogList = ({ data }) => {
  const { edges: nodes } = data.allMarkdownRemark;

  return (
    <Container>
      <Link to={"/actualites"} display='inline-block' px={1} ml={-1}>
        <Heading as='h3' >
          Actualités
        </Heading>
      </Link>
      {nodes &&
        nodes.map(({ node }) => <BlogPostLine node={node} key={node?.fields?.slug} />)}
    </Container>
  );
};

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogListQuery {
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
    render={(data, count) => <BlogList data={data} count={count} />}
  />
);
