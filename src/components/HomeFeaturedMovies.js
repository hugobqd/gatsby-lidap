import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProductionCell from "./cell/productionCell";

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
                  fluid(maxWidth: 1200, quality: 100) {
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
        <ProductionCell node={node} key={node.id} />
      ))}
    </section>
  );
};

export default HomeFeaturedMovies;
