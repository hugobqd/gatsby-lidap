import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostProductionList from "../components/PostProductionList/PostProductionList";
import Heading from "../components/Heading";
import Container from "../components/Container";

export const PostProductionPageTemplate = ({ title }) => (
  <main>
    <Container>
      <Heading style={{ marginBottom: "3rem" }}>{title}</Heading>
      <PostProductionList />
    </Container>
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
