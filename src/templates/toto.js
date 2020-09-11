import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const TotoTemplate = ({ title }) => (
  <section>
    <h1>{title}</h1>
  </section>
);

const TotoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <pre>Titre:</pre>
      <TotoTemplate title={frontmatter.title} />
    </Layout>
  );
};

export default TotoPage;

export const totoPageQuery = graphql`
  query totoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
