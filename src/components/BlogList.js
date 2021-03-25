import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import Button from "./common/Button";
import BlogPostLine from "./cell/BlogPostLine";
import styled from "styled-components";
import Container from "./Container";

const BlogList = ({ data }) => {
  const { edges: nodes } = data.allMarkdownRemark;

  return (
    <>
      {/* <ThemeProvider theme={themeInverted}> */}
        <Container>
          <Button to={"/actualites"} as={Link} >Actualités</Button>
        </Container>
      {nodes &&
        nodes.map(({ node }) => <BlogPostLine node={node} key={node.id} />)}
      {/* </ThemeProvider> */}
    </>
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
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD MMMM YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogList data={data} count={count} />}
  />
);
