import React, {useState} from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Grid from "../common/Grid";
import Box from "../common/Box";
import ProductionCell from "../cell/ProductionCell";
import ProductionLine from "../cell/ProductionLine";
import { IoGridSharp, IoListSharp } from "react-icons/io5";
import FocusOutliner from "../common/FocusOutliner";


const Switch = styled.button`
  position: relative;
  display: flex;
  padding: 0;
  border: 0;
  color: ${(props)=> props.theme.colors.link};
  background: ${(props)=> props.theme.colors.darker};

  &:hover {
    color: ${(props)=> props.theme.colors.fg};
    background: ${(props)=> props.theme.colors.bg};
  }
`;
const SwitchItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props)=> props.theme.space[4]};
  height: ${(props)=> props.theme.space[4]};
  min-width: 40px;
  min-height: 40px;
  color: ${(props)=> props.active ? 'currentColor': props.theme.colors.dark };
  background: ${(props)=> props.active ? 'transparent' : props.theme.colors.link };

  & svg {
    width: 67%;
    height: 67%;
  }
`;

const ProductionList = ({ data }) => {
  const [view, setView] = useState('CHRONO')
  const list = data.allMarkdownRemark.edges;

  const alphabeticalList = [...list].sort(function (a, b) {
    var textA = a.node.frontmatter.title.toUpperCase();
    var textB = b.node.frontmatter.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <Box position='relative'>
      <Box position={['static', 'absolute']} top={'-5.5rem'} right={'3.5rem'} ml={3} mb={4}>
        <Switch onClick={()=>setView(view === 'ALPHA' ? 'CHRONO' : 'ALPHA')} aria-label={`Afficher ${view === 'ALPHA' ? 'par dates récentes': 'par ordre alphabétique'}`}>
          <SwitchItem active={view !== 'CHRONO'}><IoGridSharp/></SwitchItem>
          <SwitchItem active={view !== 'ALPHA'}><IoListSharp/></SwitchItem>
          <FocusOutliner />
        </Switch>
      </Box>
      {view !== "ALPHA" && (
        <Grid gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}>
          {list &&
            list.map(({ node }) => (
              <ProductionCell node={node} key={node.id} />
            ))}
        </Grid>
      )}
      {view === "ALPHA" && (
        <Box>
          {alphabeticalList &&
            alphabeticalList.map(({ node }) => (
              <ProductionLine node={node} key={node.id} />
            ))}
        </Box>
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
              excerpt(pruneLength: 400)
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductionList data={data} count={count} />}
  />
);
