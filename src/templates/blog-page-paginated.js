import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Heading from "../components/common/Heading";
import Stack from "../components/common/Stack";
import Container from "../components/common/Container";
import Pagination from "../components/list/Pagination";
import BlogPostLine from "../components/cell/BlogPostLine";
import Box from "../components/common/Box";

const BlogList = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const pageInfo = data.allMarkdownRemark.pageInfo;
  return (
    <Layout location={location}>
      <Stack>
        <Container>
          <Heading>Actualités</Heading>
        </Container>
        <Container>
          <Box pl={[3, 5]}>
            {posts.map(({ node }) => {
              return <BlogPostLine node={node} key={node?.fields?.slug} />;
            })}
          </Box>
          <Box pl={[3, 5]}>
            <Pagination pageInfo={pageInfo} pt={4} />
          </Box>
        </Container>
      </Stack>
    </Layout>
  );
};
export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        itemCount
        pageCount
        perPage
        totalCount
        hasPreviousPage
      }
    }
  }
`;
