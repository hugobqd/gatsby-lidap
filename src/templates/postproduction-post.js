import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { Row, Col } from "../components/GridSystem";

export const PostProductionPostTemplate = ({
  content,
  contentComponent,
  description,
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
      </Container>
      ÉQUIPE:
      <pre
        style={{
          background: "navy",
          fontSize: 10,
          // display: "none",
        }}
      >
        {JSON.stringify(team_list, null, 2)}
      </pre>
      <Container>
        {team_list && (
          <Row>
            {team_list.map((teamMember) => (
              <Col>{teamMember.team_name}</Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  );
};

PostProductionPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const PostProductionPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PostProductionPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
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

PostProductionPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PostProductionPost;

export const pageQuery = graphql`
  query PostProductionPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        team_list {
          team_name
          team_text
          team_title
        }
      }
    }
  }
`;
