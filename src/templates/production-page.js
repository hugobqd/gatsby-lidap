import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductionList from "../components/ProductionList/ProductionList";

export const ProductionPageTemplate = ({ title }) => (
  <main>
    <h1>{title}</h1>
    <ProductionList />
  </main>
);

const ProductionPagePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductionPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

export default ProductionPagePage;

export const productionPageQuery = graphql`
  query productionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
