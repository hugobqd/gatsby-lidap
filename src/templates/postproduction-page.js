import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostProductionList from "../components/PostProductionList/PostProductionList";

export const PostProductionPageTemplate = ({ title }) => (
  <main>
    <h1>{title}</h1>
    <PostProductionList />
  </main>
);

const PostProductionPagePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PostProductionPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

export default PostProductionPagePage;

export const postProductionPageQuery = graphql`
  query postProductionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
