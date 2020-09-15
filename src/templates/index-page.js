import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import HomeHero from "../components/HomeHero";
import HomeFeaturedMovies from "../components/HomeFeaturedMovies";

export const IndexPageTemplate = ({ data }) => {
  // const actu = data.actu.edges;
  // const prod = data;
  return (
    <>
      {/* <pre style={{ background: "linen", fontSize: 10 }}>
        {JSON.stringify(actu, null, 2)}
      </pre> */}
      <HomeHero />
      <HomeFeaturedMovies />
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

export const pageQuery = graphql`
  query IndexPageTemplate {
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
    actu: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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

// import React from "react";
// import PropTypes from "prop-types";
// import { Link, graphql } from "gatsby";
// import styled from "styled-components";

// import Layout from "../components/Layout";
// import BlogList from "../components/BlogList";
// import HomeHero from "../components/HomeHero";
// import HomeFeaturedMovies from "../components/HomeFeaturedMovies";

// const Container = styled.div`
//   max-width: 90%;
//   margin-right: auto;
//   margin-left: auto;
// `;

// export const IndexPageTemplate = (data) => <IndexPage data={data} />;

// export const IndexPage = ({ data }) => {
//   const { featuredproduction } = data.markdownRemark.frontmatter;

//   return (
//     <Layout>
//       <Container>
//         <pre style={{ background: "linen", fontSize: 11 }}>
//           {JSON.stringify(featuredproduction, null, 2)}
//         </pre>
//         <HomeHero />
//         Ici:
//         <HomeFeaturedMovies list={featuredproduction} />
//         LÀ:
//         <BlogList />
//       </Container>
//     </Layout>
//   );
// };

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

// export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     prod: allMarkdownRemark(
//       filter: {
//         frontmatter: {
//           templateKey: { eq: "production-post" }
//           featuredpost: { eq: true }
//         }
//       }
//       limit: 3
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//             director
//             featuredpost
//             featuredimage {
//               childImageSharp {
//                 fluid(maxWidth: 120, quality: 100) {
//                   src
//                 }
//               }
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//     actu: allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//       limit: 3
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//             director
//             featuredpost
//             featuredimage {
//               childImageSharp {
//                 fluid(maxWidth: 120, quality: 100) {
//                   src
//                 }
//               }
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
