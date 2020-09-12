import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductionList from "../components/ProductionList/ProductionList";

export const PostProductionPageTemplate = ({ title }) => (
  <main>
    <h1>{title}</h1>
    <ProductionList />
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
