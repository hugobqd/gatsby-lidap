import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Grid from "./common/Grid";
import ProductionCell from "./cell/ProductionCell";
import { breakpoints as bp } from "../style/breakpoints";

const ProductionList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <Grid gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}>
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
