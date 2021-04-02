import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HomeBlogList from "../components/list/HomeBlogList";
import HomeHero from "../components/HomeHero";
import HomeFeaturedMovies from "../components/list/HomeFeaturedMovies";

export const IndexPageTemplate = ({ data }) => {
  return (
    <>
      <HomeHero />
      <HomeFeaturedMovies />
      <HomeBlogList />
    </>
  );
};

const IndexPage = ({ data, location }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <IndexPageTemplate data={data} />
    </Layout>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate($id: String!) {
//     current: markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//     }
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
//   }
// `;
