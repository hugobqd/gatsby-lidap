import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const {
      currentPage,
      hasPreviousPage,
      hasNextPage,
    } = this.props.data.allMarkdownRemark.pageInfo;
    return (
      <Layout>
        <nav>
          <div>
            {hasPreviousPage && (
              <Link
                disabled={!hasPreviousPage}
                to={`/blog/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
              >
                {"<-"}
              </Link>
            )}
            <strong>{currentPage}</strong>
            {hasNextPage && (
              <Link disabled={!hasNextPage} to={`/blog/${currentPage + 1}`}>
                {"->"}
              </Link>
            )}
          </div>
          <pre style={{ fontSize: 14 }}>
            {JSON.stringify(
              this.props.data.allMarkdownRemark.pageInfo,
              null,
              2
            )}
          </pre>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return <div key={node.fields.slug}>{title}</div>;
          })}
        </nav>
      </Layout>
    );
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
