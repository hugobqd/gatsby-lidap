import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProductionCell from "../cell/ProductionCell";
import Box from "../common/Box";
import Grid from "../common/Grid";

const HomeFeaturedMovies = ({ rest }) => {
  const data = useStaticQuery(graphql`
    query featuredMoviesQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { eq: "production-post" }
            featuredpost: { eq: true }
          }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              director
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 1024, quality: 90) {
                    src
                    ...GatsbyImageSharpFluid
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
  `);

  return (
    <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} gridGap={0} mb={5}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Box key={node?.fields?.slug}>
          <ProductionCell node={node} key={node?.fields?.slug} big />
        </Box>
      ))}
    </Grid>
  );
};

export default HomeFeaturedMovies;
