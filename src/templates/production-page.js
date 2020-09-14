import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductionList from "../components/ProductionList/ProductionList";
import Container from "../components/Container";

export const ProductionPageTemplate = ({ title, description }) => (
  <main>
    <Container>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <ProductionList />
    </Container>
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

// id = b2269e3e-cda0-5285-8c0e-8ef9e4842321
export const productionPageQuery = graphql`
  query productionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
