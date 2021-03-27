import React from "react";
import Button from "../common/Button";
import { space, layout } from "styled-system";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = styled.nav(space, layout);

const Pagination = ({ pageInfo, ...rest }) => {
  const {
    currentPage,
    hasPreviousPage,
    // pageCount,
    // perPage,
    hasNextPage,
  } = pageInfo;
  // hasNextPage doesn't work.
  return (
    <Nav {...rest}>
      {hasPreviousPage && (
        <Button
          as={Link}
          disabled={!hasPreviousPage}
          to={`/actualites/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
          aria-label='page précédente'
        >
          {" ← "}
        </Button>
      )}{" "}
      <strong>{currentPage}</strong>{" "}
      {hasNextPage && (
        <Button 
          as={Link}
          disabled={!hasNextPage} 
          to={`/actualites/${currentPage + 1}`}
          aria-label='page suivante'
        >
          {"→"}
        </Button>
      )}
    </Nav>
  );
};

export default Pagination;
