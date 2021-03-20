import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { getDomain } from "tldts";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Heading from "../components/Heading";
// import styled from "styled-components";
import ReactPlayer from "react-player";
import { Row, Col } from "../components/common/GridSystem";
import DocumentsList from "../components/DocumentsList";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import { splitTitle } from "../components/hooks/splitTitle";

export const ProductionPostTemplate = ({
  content,
  contentComponent,
  credit,
  date,
  description,
  document_list,
  director,
  featuredimage,
  gallery_list,
  helmet,
  productor,
  selection,
  tags,
  technical,
  title,
  trailer,
  vod_list,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Container>
        <Heading mb={4}>{splitTitle(title)}</Heading>
      </Container>
      {featuredimage && (
        // <PreviewCompatibleImage
        //   imageInfo={{
        //     image: featuredimage,
        //     alt: `Image principale de ${title}`,
        //   }}
        // />
        <Img
          fluid={{
            ...featuredimage.childImageSharp.fluid,
            aspectRatio: 1920 / 866,
          }}
        />
      )}
      <Container mt={4}>
        <Row gap={[2, 1]}>
          <Col className="fs-4">
            <h4 style={{ textTransform: "uppercase", fontWeight: 900 }}>
              {director}
            </h4>
            {tags && tags.length && (
              <span style={{ textTransform: "capitalize" }}>
                {tags.map((tag) => (
                  <span key={tag + `tag`}>{tag} —</span>
                ))}
              </span>
            )}{" "}
            {date}
          </Col>
          {vod_list && (
            <Col style={{ textAlign: "right" }}>
              {vod_list.map(({ vod_item }, i) => (
                <div>
                  <Button to={vod_item} target="_blank" key={i}>
                    {getDomain(vod_item)}
                  </Button>
                </div>
              ))}
            </Col>
          )}
        </Row>
      </Container>

      <Container intro py={3} lineHeight={1.3} ml={0}>
        <p className="fs-4">{description}</p>
      </Container>

      {(trailer || gallery_list) && (
        <Container style={{ marginBottom: "2rem" }}>
          {trailer && (
            <div
              style={{
                aspectRatio: "1920 / 866",
                position: "relative",
                background: "rgba(0,0,0,.25)",
              }}
            >
              <ReactPlayer
                url={trailer}
                width="100%"
                height="100%"
                controls={true}
                //light
                pip={true}
                playsinline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          )}

          {gallery_list &&
            gallery_list.map((image, i) => (
              <Box style={{ marginTop: "2rem" }} key={i}>
                <Img
                  fluid={{
                    ...image.gallery_img.childImageSharp.fluid,
                    aspectRatio: 1920 / 866,
                  }}
                  alt={
                    image?.gallery_caption
                      ? image?.gallery_caption
                      : `${title} image ${i + 1}`
                  }
                />
              </Box>
            ))}
        </Container>
      )}

      <Container text>
        <PostContent content={content} />
        <br />
        {document_list && <DocumentsList list={document_list} p={3} mb={5} />}
      </Container>

      <Container py={5}>
        <Box style={{ fontSize: ".8em", lineHeight: 1.1 }}>
          <Row>
            {technical && (
              <Col>
                <h4>Fiche technique</h4>
                <ReactMarkdown>{technical}</ReactMarkdown>
              </Col>
            )}
            {credit && (
              <Col>
                <h4>Équipe</h4>
                <ReactMarkdown>{credit}</ReactMarkdown>
              </Col>
            )}
            {productor && (
              <Col>
                <h4>Production</h4>
                <ReactMarkdown>{productor}</ReactMarkdown>
              </Col>
            )}
            {selection && (
              <Col>
                <h4>Séléction</h4>
                <ReactMarkdown>{selection}</ReactMarkdown>
              </Col>
            )}
          </Row>
        </Box>
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
          background: "navy",
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
        credit={post.frontmatter.credit}
        date={post.frontmatter.date}
        document_list={post.frontmatter.document_list}
        director={post.frontmatter.director}
        featuredimage={post.frontmatter.featuredimage}
        gallery_list={post.frontmatter.gallery_list}
        productor={post.frontmatter.productor}
        selection={post.frontmatter.selection}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        technical={post.frontmatter.technical}
        trailer={post.frontmatter.trailer}
        vod_list={post.frontmatter.vod_list}
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
        credit
        date(formatString: "YYYY")
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
        director
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery_list {
          # gallery_caption
          gallery_img {
            id
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        productor
        selection
        tags
        technical
        title
        trailer
        vod_list {
          vod_item
        }
      }
    }
  }
`;
