import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import HomeHero from "../components/HomeHero";
import HomeFeaturedMovies from "../components/HomeFeaturedMovies";

const Container = styled.div`
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
`;

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Container>
        {/* <pre style={{ background: "linen", fontSize: 11 }}>
          {JSON.stringify(frontmatter, null, 2)}
        </pre> */}
        <HomeHero />
        Ici:
        <HomeFeaturedMovies />
        LÀ:
        <BlogRoll />
      </Container>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
