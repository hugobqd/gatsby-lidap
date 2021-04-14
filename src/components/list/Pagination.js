import React from "react";
import Button from "../common/Button";
import { Link } from "gatsby";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import Flex from "../common/Flex";
import Box from "../common/Box";

const Pagination = ({ pageInfo, ...rest }) => {
  const { currentPage, hasPreviousPage, hasNextPage } = pageInfo;
  return (
    <>
      {(hasPreviousPage || hasNextPage) && (
        <Flex as="nav" {...rest} alignItems="center">
          {hasPreviousPage && (
            <Button
              as={Link}
              disabled={!hasPreviousPage}
              to={`/actualites/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
              aria-label="page précédente"
              icon={<ImArrowLeft />}
              mr={4}
            >
              <Box as="span" fontWeight="normal">
                Page
              </Box>
              <br />
              précédente
            </Button>
          )}

          <Box
            className="fs-4"
            fontWeight="bold"
            lineHeight="1"
            aria-label={`Vous êtes à la page ${currentPage}`}
          >
            {currentPage}
          </Box>

          {hasNextPage && (
            <Button
              as={Link}
              disabled={!hasNextPage}
              to={`/actualites/${currentPage + 1}`}
              aria-label="page suivante"
              iconEnd={<ImArrowRight />}
              ml={4}
            >
              <Box as="span" fontWeight="normal">
                Page
              </Box>
              <br />
              suivante
            </Button>
          )}
        </Flex>
      )}
    </>
  );
};

export default Pagination;
