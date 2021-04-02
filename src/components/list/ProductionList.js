import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Grid from "../common/Grid";
import Box from "../common/Box";
import Flex from "../common/Flex";
import ProductionCell from "../cell/ProductionCell";
import ProductionLine from "../cell/ProductionLine";
import { IoGridSharp, IoListSharp } from "react-icons/io5";
import FocusOutliner from "../common/FocusOutliner";
import Container from "../common/Container";

const Switch = styled.button`
  position: relative;
  display: flex;
  padding: 0;
  border: 0;
  color: ${(props) => props.theme.colors.link};
  background: ${(props) => props.theme.colors.dark};

  &:hover {
    color: ${(props) => props.theme.colors.fg};
    background: ${(props) => props.theme.colors.darker};
  }
`;
const SwitchItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(props) => props.theme.space[4]};
  min-height: ${(props) => props.theme.space[4]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) =>
    props.active ? "currentColor" : props.theme.colors.dark};
  background: ${(props) =>
    props.active ? "transparent" : props.theme.colors.link};

  & svg {
    width: 67%;
    height: 67%;
  }
`;

const ProductionList = ({ data }) => {
  const listAll = data.allMarkdownRemark.edges;
  const [viewType, setViewType] = useState("CHRONO");
  const [viewVod, setViewVod] = useState(false);
  const [list, setList] = useState(listAll);

  useEffect(() => {
    const listFiltered = viewVod
      ? listAll.filter(({ node }) => !!node.frontmatter?.vod_list)
      : listAll;
    setList(listFiltered);
  }, [viewVod, listAll]);

  const alphabeticalList = (list) => {
    return [...list].sort(function (a, b) {
      var textA = a.node.frontmatter.title.toUpperCase();
      var textB = b.node.frontmatter.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  };

  return (
    <Box position="relative">
      <Flex
        position={["static", "absolute"]}
        top={"-5.5rem"}
        right={5}
        ml={3}
        mb={4}
      >
        <Box mr={[3, 5]}>
          <Switch
            onClick={() => setViewVod(!viewVod)}
            aria-label={`Afficher ${viewVod ? "tous" : "avec V O D"}`}
          >
            <SwitchItem active={viewVod}>
              <Box px={2} pb=".1em">
                TOUT
              </Box>
            </SwitchItem>
            <SwitchItem active={!viewVod}>
              <Box px={2} pb=".1em">
                VOD
              </Box>
            </SwitchItem>
            <FocusOutliner />
          </Switch>
        </Box>
        <Box>
          <Switch
            onClick={() =>
              setViewType(viewType === "ALPHA" ? "CHRONO" : "ALPHA")
            }
            aria-label={`Afficher ${
              viewType === "ALPHA"
                ? "par dates récentes"
                : "par ordre alphabétique"
            }`}
          >
            <SwitchItem active={viewType !== "CHRONO"}>
              <IoGridSharp />
            </SwitchItem>
            <SwitchItem active={viewType !== "ALPHA"}>
              <IoListSharp />
            </SwitchItem>
            <FocusOutliner />
          </Switch>
        </Box>
      </Flex>
      {viewType !== "ALPHA" && (
        <Grid gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}>
          {list &&
            list.map(({ node }) => (
              <ProductionCell node={node} key={node.id} />
            ))}
        </Grid>
      )}
      {viewType === "ALPHA" && (
        <Container>
          {list &&
            alphabeticalList(list).map(({ node }) => (
              <ProductionLine node={node} key={node.id} />
            ))}
        </Container>
      )}
    </Box>
  );
};

ProductionList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProductionListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "production-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                director
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                vod_list {
                  vod_item
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductionList data={data} count={count} />}
  />
);
