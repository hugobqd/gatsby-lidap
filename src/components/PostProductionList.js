import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Flex from "./common/Flex";
import FocusOutliner from "./common/FocusOutliner";
import Stack from "./common/Stack";
import Box from "./common/Box";
import Heading from "./common/Heading";

const PostProductionLine = styled(Link)`
  background-color: ${(props) => props.theme.colors.lavender};
  color: ${(props) => props.theme.colors.bg};
  position: relative;
  display: inline-flex;
  
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darker};
    text-decoration: none;
  }
`;

const PostProductionList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  posts.sort((a, b) => {
    return a.node.frontmatter.title.localeCompare(b.node.frontmatter.title);
  });

  return (
    <Stack spacing={3} pl={[0, 5]}>
      {posts &&
        posts.map(({ node: post }) => (
          <Box>
            <PostProductionLine to={post.fields.slug} key={post.id}>
              <Flex
                as="article"
                px={[4, 5]}
                py={[2, 3]}
                lineHeight={1}
                fontWeight="800"
              >
                <Heading as="h3" py={1}>{post.frontmatter.title}</Heading>
              </Flex>
              <FocusOutliner />
            </PostProductionLine>
          </Box>
        ))}
    </Stack>
  );
};

PostProductionList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PostProductionListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { templateKey: { eq: "postproduction-post" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PostProductionList data={data} count={count} />}
  />
);
