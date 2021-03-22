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
import Heading from "../components/common/Heading";
// import styled from "styled-components";
import ReactPlayer from "react-player";
import { Row, Col } from "../components/common/GridSystem";
import DocumentsList from "../components/DocumentsList";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import { splitTitle } from "../components/hooks/splitTitle";
import Stack from "../components/common/Stack";
import AspectRatio from "../components/common/AspectRatio";

const nbsp = "\xa0";
const year = (date) => {
  const isoDate = new Date(date);
  return isoDate.getFullYear();
};

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
      <Stack>
        <Container>
          <Heading indent>{splitTitle(title)}</Heading>
        </Container>
        {featuredimage && (
          <Img
            fluid={{
              ...featuredimage.childImageSharp.fluid,
              aspectRatio: 1920 / 866,
            }}
          />
        )}
        <Container>
          <Stack position="relative">
            <Box>
              <Heading as="h4">
                {director}
                {date && ` ${nbsp}${nbsp}—${nbsp}${nbsp}${nbsp}${year(date)}`}
              </Heading>
            </Box>
            {vod_list && (
              <Box pl={[0, 5]}>
                {vod_list.map(({ vod_item }, i) => (
                  <Button to={vod_item} target="_blank" key={i}>
                    {getDomain(vod_item)}
                  </Button>
                ))}
              </Box>
            )}
            {description && (
              <Container intro style={{ padding: 0 }}>
                <Text className="fs-4" pl={[0, 5]}>
                  {description.replace(/\\/g, " ")}
                </Text>
              </Container>
            )}
          </Stack>
        </Container>

        {(trailer || gallery_list) && (
          <Container>
            <Stack>
              {trailer && (
                <Box position="relative" bg="black">
                  <AspectRatio ratio="16/9" maxHeight="90vh" />
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
                </Box>
              )}

              {gallery_list &&
                gallery_list.map((image, i) => (
                  <Box key={i}>
                    <Img
                      fluid={{
                        ...image.gallery_img.childImageSharp.fluid,
                        aspectRatio: 16 / 9,
                      }}
                      alt={
                        image?.gallery_caption
                          ? image?.gallery_caption
                          : `${title} image ${i + 1}`
                      }
                    />
                  </Box>
                ))}
            </Stack>
          </Container>
        )}

        {(content || document_list) && (
          <Container intro>
            <Stack>
              {content && <PostContent content={content} />}
              {document_list && <DocumentsList list={document_list} />}
            </Stack>
          </Container>
        )}

        <Container>
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
      </Stack>
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
