import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import styled from "styled-components";
import ReactPlayer from "react-player";

const InfoBar = styled.div`
  display: flex;
`;

export const ProductionPostTemplate = ({
  content,
  contentComponent,
  featuredimage,
  description,
  tags,
  title,
  helmet,
  director,
  date,
  vod,
  trailer,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Container>
        <h1>{title}</h1>
      </Container>
      {featuredimage ? (
        <PreviewCompatibleImage
          imageInfo={{
            image: featuredimage,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
      ) : null}
      <Container wide>
        <InfoBar>
          <div>
            <h3>{director}</h3>
            {tags && tags.length ? (
              <span>
                {tags.map((tag) => (
                  <span key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> —
                  </span>
                ))}
              </span>
            ) : null}{" "}
            {date}
          </div>
          {vod && (
            <div style={{ marginLeft: "auto" }}>
              <Link to={vod} target="_blank">
                VOD
              </Link>
            </div>
          )}
        </InfoBar>
      </Container>
      <Container text>
        <p>{description}</p>
      </Container>

      {trailer && (
        <ReactPlayer
          url={trailer}
          width="100%"
          height="500px"
          controls="true"
          light
          playsinline
        />
      )}

      <Container text>
        <PostContent content={content} />
      </Container>
    </main>
  );
};

ProductionPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ProductionPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <pre
        style={{
          background: "pink",
          fontSize: 10,
          display: "none",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      <ProductionPostTemplate
        post={post}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Film">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        director={post.frontmatter.director}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        trailer={post.frontmatter.trailer}
        vod={post.frontmatter.vod}
      />
    </Layout>
  );
};

ProductionPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProductionPost;

export const pageQuery = graphql`
  query ProductionPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY")
        title
        director
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
        trailer
        vod
      }
    }
  }
`;
