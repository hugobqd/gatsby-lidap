import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogList from "../components/list/BlogList";
import HomeHero from "../components/HomeHero";
import HomeFeaturedMovies from "../components/list/HomeFeaturedMovies";
import Container from "../components/common/Container";
import Box from "../components/common/Box";

export const IndexPageTemplate = ({ data }) => {
  // const actu = data.actu.edges;
  // const prod = data;
  return (
    <>
      <Container>
        <HomeHero />
        <Box pb={4}>
          <HomeFeaturedMovies />
        </Box>
      </Container>
      <BlogList />
    </>
  );
};

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate data={data} />
    </Layout>
  );
};

export default IndexPage;

/*
export const postProductionPageQuery = graphql`
  query postProductionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
*/

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    prod: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "production-post" }
          featuredpost: { eq: true }
        }
      }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            director
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
