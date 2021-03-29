import React from "react";
import Grid from "../common/Grid";
import Box from "../common/Box";
import Text from "../common/Text";
import Heading from "../common/Heading";
import ReactMarkdown from "react-markdown";

const TeamList = ({ list }) => {
  return (
    <>
      {list && (
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          px={[0, 5]}
          gridGap={[3, 5]}
        >
          {list.map(({ team_name, team_title, team_text }, i) => (
            <Box>
              {/* <div
                style={{
                  maxWidth: "11rem",
                  marginBottom: "1rem",
                }}
              >
                <PreviewCompatibleImage imageInfo={member.team_portrait} />
              </div> */}
              {team_name && (
                <Heading as="h4" mb={2} letterSpacing="0.033em">
                  {team_name}
                </Heading>
              )}
              {team_title && (
                <Text as="h5" mb={3} fontWeight="900" pl={[0, 3]}>
                  {team_title}
                </Text>
              )}
              {team_text && (
                <Box className="labeur fs-6" pl={[0, 3]}>
                  <ReactMarkdown>{team_text}</ReactMarkdown>
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      )}
    </>
  );
};

export default TeamList;
