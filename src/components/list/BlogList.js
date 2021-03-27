import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import BlogPostLine from "../cell/BlogPostLine";
import Container from "../common/Container";
import Text from "../common/Text";

const BlogList = ({ data }) => {
  const { edges: nodes } = data.allMarkdownRemark;

  return (
  <Container>
    <Text to={"/actualites"} as={Link} >Actualités</Text>
    {nodes &&
      nodes.map(({ node }) => <BlogPostLine node={node} key={node.id} />)
    }
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
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }, limit: 5
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
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
