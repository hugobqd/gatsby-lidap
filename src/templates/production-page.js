import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ProductionPageTemplate = ({ title }) => (
  <section>
    <h1>{title}</h1>
  </section>
);

const ProductionPagePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <pre>Titre:</pre>
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
