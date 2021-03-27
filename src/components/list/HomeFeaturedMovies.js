import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProductionCell from "../cell/ProductionCell";
import Box from "../common/Box";

const HomeFeaturedMovies = () => {
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
                    ...GatsbyImageSharpFluidLimitPresentationSize
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
    <section>
      
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box key={node?.fields?.slug}>
            {node?.fields?.slug}
            <ProductionCell node={node}  key={node?.fields?.slug}/>
          </Box>
        ))}
      
    </section>
  );
};

export default HomeFeaturedMovies;
