import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { Row, Col } from "../components/GridSystem";
import DocumentsList from "../components/DocumentsList";

export const BasicPageTemplate = ({
  content,
  contentComponent,
  description,
  document_list,
  helmet,
  team_list,
  title,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Container>
        <Heading>{title}</Heading>
        <Row>
          <Col span={8}>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
      <Container text>
        <PostContent content={content} />
        {document_list && <DocumentsList list={document_list} p={3} mb={5} />}
      </Container>

      <Container>
        {team_list && (
          <Row>
            {team_list.map((member, i) => (
              <Col key={i}>
                <h3>{member.team_name}</h3>
                <h4>{member.team_title}</h4>
                {member.team_text}
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  );
};

BasicPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BasicPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        document_list={post.frontmatter.document_list}
        helmet={
          <Helmet titleTemplate="%s | Production">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        team_list={post.frontmatter.team_list}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BasicPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BasicPage;

export const pageQuery = graphql`
  query BasicPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        document_list {
          document_item {
            id
            publicURL
            base
            extension
          }
          document_title
        }
        team_list {
          team_name
          team_portrait {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          team_text
          team_title
        }
        title
      }
    }
  }
`;
