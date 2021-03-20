import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Row, Col } from "./common/GridSystem";
import ProductionCell from "./cell/ProductionCell";
import { breakpoints as bp } from "../style/breakpoints";

import styled from "styled-components";
import { space, layout, color } from "styled-system";

const Grid = styled.div`
  grid-template-columns: repeat(1, 1fr);
  @media ${bp.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${bp.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  content: "toto";
  ${space}
  ${layout}
  ${color}
`;

const ProductionList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <Grid display="grid">
        {posts &&
          posts.map(({ node }) => <ProductionCell node={node} key={node.id} />)}
      </Grid>
    </>
  );
};

ProductionList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProductionListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "production-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                director
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
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
    render={(data, count) => <ProductionList data={data} count={count} />}
  />
);
