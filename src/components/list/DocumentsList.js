import React from "react";
import Box from "../common/Box";
import Stack from "../common/Stack";
import Text from "../common/Text";
import Button from "../common/Button";

const DocumentsList = ({ list, ...props }) => {
  return (
    <Stack spacing={3}>
      {list.map(({ document_item, document_title }, i) => (
        <Box key={i}>
          <Button
            href={document_item.publicURL}
            target="_blank"
            key={i}
            icon="file"
          >
            {document_title || "Fichier"}
            <br />
            <Text as="span" fontWeight={400}>
              {document_item.extension}
            </Text>
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

export default DocumentsList;
