import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/common/Container";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import Stack from "../components/common/Stack";
import DocumentsList from "../components/list/DocumentsList";

const StyledHeadingBlog = styled(Box)`
  font-weight: 900;
  font-style: italic;
  margin-top: -0.15em;
  hyphens: auto;
  @media ${(props) => props.theme.bp[0]} {
    hyphens: none;
  }
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  title,
  helmet,
  document_list,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Stack as="main">
      {helmet || ""}
      <Box>
        <Container>
          <StyledHeadingBlog as="h1" className="fs-15">
            {title}
          </StyledHeadingBlog>
          {date && (
            <Box mt={3}>
              <Text as="time" fontWeight="bold" className="fs-4">
                {date}
              </Text>
            </Box>
          )}
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
          <Box maxWidth="text" pl={[0, 5]}>
            <DocumentsList list={document_list} />
          </Box>
        </Container>
      )}
    </Stack>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s - Actualité | L'image d'après">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:title"
              content={`${post.frontmatter.title} - L'image d'après`}
            />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={location} />
          </Helmet>
        }
        title={post.frontmatter.title}
        document_list={post.frontmatter.document_list}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
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
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
