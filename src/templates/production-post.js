import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { getDomain } from "tldts";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/common/Container";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Heading from "../components/common/Heading";
// import styled from "styled-components";
import ReactPlayer from "react-player";
import DocumentsList from "../components/list/DocumentsList";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import { splitTitle } from "../components/hooks/splitTitle";
import Stack from "../components/common/Stack";
import AspectRatio from "../components/common/AspectRatio";
import Grid from "../components/common/Grid";
import Measure from "react-measure";
import FocusOutliner from "../components/common/FocusOutliner";

const Details = ({ children, label }) => {
  const [itemHeight, setItemHeight] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);
  const [full, setFull] = useState(true);
  useEffect(() => {
    if (itemHeight && itemHeight > windowHeight * 0.75) {
      setFull(false);
    } else {
      setFull(true);
    }
  }, [itemHeight, windowHeight]);
  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setItemHeight(contentRect.bounds.height);
        setWindowHeight(window.innerHeight);
      }}
    >
      {({ measureRef }) => (
        <div>
          <Heading as="h5" mb={3} letterSpacing="0.033em">
            {label}
          </Heading>
          <div
            style={{
              maxHeight: full ? "none" : windowHeight * 0.5,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box ref={measureRef} pl={[0, 3]}>
              {children}
            </Box>
            {!full && (
              <Box position="absolute" bottom={0} left={0} width={"100%"}>
                <div
                  style={{
                    height: "15vh",
                    background:
                      "linear-gradient(0deg, #19191F 5%, #19191F00 100%)",
                  }}
                ></div>
                <Box bg="dark" position="relative">
                  <Box
                    as="button"
                    color="link"
                    border="none"
                    pl={3}
                    bg="dark"
                    fontWeight="bold"
                    width="100%"
                    textAlign="left"
                    position="relative"
                    onClick={() => {
                      setFull(true);
                    }}
                  >
                    Plus…
                    <FocusOutliner inside="true" />
                  </Box>
                </Box>
              </Box>
            )}
          </div>
        </div>
      )}
    </Measure>
  );
};
const nbsp = "\xa0";
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
    <Stack as="main">
      {helmet || ""}
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
              {date && ` ${nbsp}${nbsp}—${nbsp}${nbsp}${nbsp}${date}`}
            </Heading>
          </Box>
          {vod_list && (
            <Box pl={[0, 5]} mt={-3}>
              {vod_list.map(({ vod_item, vod_text }, i) => (
                <Button
                  href={vod_item}
                  target="_blank"
                  key={i}
                  icon="play"
                  mr={3}
                  mt={3}
                >
                  {vod_text || "VOD"}
                  <br />
                  <Text as="span" fontWeight="normal">
                    {getDomain(vod_item)}
                  </Text>
                </Button>
              ))}
            </Box>
          )}
          {description && (
            <Box maxWidth="text" ml={[0, 5]}>
              <Text className="fs-4">{description.replace(/\\/g, " ")}</Text>
            </Box>
          )}
        </Stack>
      </Container>

      {(trailer || gallery_list) && (
        <Container>
          <Stack>
            {trailer && (
              <Box position="relative" bg="black">
                <AspectRatio ratio={`${16 / 9}`} maxHeight="90vh" />
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
        <Container>
          <Box maxWidth="text" ml={[0, 5]}>
            <Stack>
              {content && <PostContent className="labeur" content={content} />}
              {document_list && <DocumentsList list={document_list} />}
            </Stack>
          </Box>
        </Container>
      )}

      <Container>
        <Grid
          gridTemplateColumns={["repeat(auto-fit, minmax(190px, 1fr))"]}
          alignItems="start"
          gridGap={[3, 4]}
          className="fs-6"
        >
          {[
            { field: technical, label: "Fiche technique" },
            { field: credit, label: "Équipe" },
            { field: productor, label: "Production" },
            { field: selection, label: "Séléction" },
          ].map(({ field, label }) => {
            if (field) {
              return (
                <div key={label}>
                  <Box mb={[5, 0]}>
                    <Details label={label}>
                      <ReactMarkdown>{field}</ReactMarkdown>
                    </Details>
                  </Box>
                </div>
              );
            }
            return null;
          })}
        </Grid>
      </Container>
    </Stack>
  );
};

ProductionPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ProductionPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <ProductionPostTemplate
        post={post}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s - Film - L'image d'après">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:type" content="video.movie" />
            <meta
              property="og:title"
              content={`${post.frontmatter.title} - L'image d'après`}
            />
            {post.frontmatter.featuredimage && (
              <meta
                property="og:image"
                content={
                  post.frontmatter.featuredimage.childImageSharp.fluid.src
                }
              />
            )}
            <meta property="og:url" content={location} />
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
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery_list {
          # gallery_caption
          gallery_img {
            id
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90) {
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
          vod_text
        }
      }
    }
  }
`;
