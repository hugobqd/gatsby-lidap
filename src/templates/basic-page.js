import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import DocumentsList from "../components/list/DocumentsList";
import SubContentModuleSwitch from "../components/SubContentModuleSwitch";
import TeamList from "../components/list/TeamList";
import Box from "../components/common/Box";
import Stack from "../components/common/Stack";

export const BasicPageTemplate = ({
  content,
  contentComponent,
  description,
  document_list,
  helmet,
  team_list,
  title,
  featuredimage,
  forcedURL,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Stack as="main">
      {helmet || ""}
      <Box>
        <Container>
          <Heading>{title}</Heading>
          {description && (
            <Box maxWidth="text" mt={3}>
              <Text className="fs-4">{description}</Text>
            </Box>
          )}
        </Container>
      </Box>
      {featuredimage && (
        <Container>
          <Box maxWidth="text" pl={[0, 5]}>
            <Img
              fluid={{
                ...featuredimage.childImageSharp.fluid,
              }}
            />
          </Box>
        </Container>
      )}
      {content?.length > 0 && (
        <Container>
          <Box maxWidth="text" pl={[0, 5]}>
            <PostContent content={content} className="labeur" />
          </Box>
        </Container>
      )}
      {document_list?.length > 0 && (
        <Container className="documentlength">
          <DocumentsList list={document_list} />
        </Container>
      )}
      {team_list?.length > 0 && (
        <Container className="teamlist">
          <TeamList list={team_list} />
        </Container>
      )}
      <SubContentModuleSwitch route={forcedURL} />
    </Stack>
  );
};

BasicPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BasicPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
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
        parentUrl={post.frontmatter.parentUrl}
        forcedURL={post.frontmatter.forcedURL}
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
        parentUrl
        forcedURL
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
        forcedURL
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        parentUrl
        team_list {
          team_name
          #team_portrait {
          #  childImageSharp {
          #    fluid(maxWidth: 2000, quality: 100) {
          #      ...GatsbyImageSharpFluid
          #    }
          #  }
          #}
          team_text
          team_title
        }
        title
      }
    }
  }
`;
