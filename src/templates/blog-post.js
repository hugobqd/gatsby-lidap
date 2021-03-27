import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/common/Container";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import Stack from "../components/common/Stack";
import DocumentsList from "../components/list/DocumentsList";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  document_list
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Stack as='main'>
      {helmet || ""}
      <Box>
        <Container>
          <Text as='h1' fontStyle='italic' fontWeight='900' className='fs-15'>{title}</Text>
          {description && (
            <Box maxWidth="38rem" mt={3}>
              <Text className="fs-4">{description}</Text>
            </Box>
          )}
        </Container>
      </Box>
      {content?.length > 0 && 
        <Container>
          <Box maxWidth="38rem" pl={[0,5]}>
            <PostContent content={content} className='labeur'/>
          </Box>
        </Container>
      }
      {document_list?.length > 0 && 
        <Container className="documentlength">
          <DocumentsList list={document_list} />
        </Container>
      }
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

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        document_list={post.frontmatter.document_list}
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
        date(formatString: "MMMM DD, YYYY")
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
        tags
      }
    }
  }
`;
