import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Grid from "./common/Grid";
import Box from "./common/Box";
import ProductionCell from "./cell/ProductionCell";
import ProductionLine from "./cell/ProductionLine";

const ProductionList = ({ data, view }) => {
  const list = data.allMarkdownRemark.edges;

  const alphabeticalList = [...list].sort(function (a, b) {
    var textA = a.node.frontmatter.title.toUpperCase();
    var textB = b.node.frontmatter.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  console.log("list", alphabeticalList);

  return (
    <>
      {view !== "ALPHABETICAL" && (
        <Grid gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}>
          {list &&
            list.map(({ node }) => (
              <ProductionCell node={node} key={node.id} />
            ))}
        </Grid>
      )}
      {view === "ALPHABETICAL" && (
        <Box>
          {alphabeticalList &&
            alphabeticalList.map(({ node }) => (
              <ProductionLine node={node} key={node.id} />
            ))}
        </Box>
      )}
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
