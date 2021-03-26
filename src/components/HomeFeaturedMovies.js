import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProductionCell from "./cell/ProductionCell";
import { Row, Col } from "./common/GridSystem";

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
      <Row gap={[2, 0]}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <Col span={6} key={index}>
            <ProductionCell node={node} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HomeFeaturedMovies;
