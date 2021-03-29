import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Heading from "../components/common/Heading";
import Stack from "../components/common/Stack";
import Container from "../components/common/Container";
import Pagination from "../components/list/Pagination";
import BlogPostLine from "../components/cell/BlogPostLine";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const pageInfo = this.props.data.allMarkdownRemark.pageInfo;
    return (
      <Layout>
        <Stack>
          <Container>
            <Heading>Actualités</Heading>
          </Container>
          <Container>
            {posts.map(({ node }) => {
              return <BlogPostLine node={node} key={node.id} />;
            })}
            <Pagination pageInfo={pageInfo} pt={4} />
          </Container>
        </Stack>
      </Layout>
    );
  }
}
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
