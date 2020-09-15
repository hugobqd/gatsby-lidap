import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Button from "./Button";
import BlogPostLine from "./cell/BlogPostLine";
import styled, { ThemeProvider } from "styled-components";
import themeInverted from "../style/themeInverted";
import Container from "./Container";

const BackgroundSection = styled.section`
  color: ${(props) => props.theme.colors.fg};
  background-color: ${(props) => props.theme.colors.bg};
  a {
    color: ${(props) => props.theme.colors.link};
  }
`;

class BlogList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: nodes } = data.allMarkdownRemark;

    return (
      <ThemeProvider theme={themeInverted}>
        <BackgroundSection>
          <Container>
            <Button to={"/blog"} heading>
              Actualités
            </Button>
          </Container>
          {nodes &&
            nodes.map(({ node }) => <BlogPostLine node={node} key={node.id} />)}
        </BackgroundSection>
      </ThemeProvider>
    );
  }
}

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                date(formatString: "DD MMMM YYYY")
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
    render={(data, count) => <BlogList data={data} count={count} />}
  />
);
