import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import DocumentsList from "../components/list/DocumentsList";
import TeamList from "../components/list/TeamList";
import Stack from "../components/common/Stack";
import { splitTitle } from "../components/hooks/splitTitle";

export const PostProductionPostTemplate = ({
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
    <Stack as="main">
      {helmet || ""}
      <Box>
        <Container>
          <Heading>{splitTitle(title)}</Heading>
          {description && (
            <Box maxWidth="text" mt={3}>
              <Text className="fs-4">{description}</Text>
            </Box>
          )}
        </Container>
      </Box>
      {content?.length > 0 && (
        <Container>
          <Box maxWidth="text" pl={[0, 5]}>
            <PostContent content={content} className="labeur" />
          </Box>
        </Container>
      )}
      {document_list?.length > 0 && (
        <Container className="documentlength">
          <Box maxWidth="text" pl={[0, 5]}>
            <DocumentsList list={document_list} />
          </Box>
        </Container>
      )}
      {team_list?.length > 0 && (
        <Container className="teamlist">
          <TeamList list={team_list} />
        </Container>
      )}
    </Stack>
  );
};

PostProductionPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const PostProductionPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <PostProductionPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        document_list={post.frontmatter.document_list}
        helmet={
          <Helmet titleTemplate="%s - Postproduction - L'image d'après">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:title"
              content={`${post.frontmatter.title} - L'image d'après`}
            />
            <meta property="og:url" content={location} />
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
          #team_portrait {
          #childImageSharp {
          #  fluid(maxWidth: 2000, quality: 100) {
          #    ...GatsbyImageSharpFluid
          #  }
          #}
          #}
          team_text
          team_title
        }
        title
      }
    }
  }
`;
