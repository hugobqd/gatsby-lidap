import React from "react";
import ProductionList from "./ProductionList";
import PostProductionList from "./PostProductionList";
import BlogList from "./BlogList";
import Container from "./Container";

const SubContentModuleSwitch = ({ route }) => {
  switch (route) {
    case "production":
      return (
        <Container>
          <ProductionList />
        </Container>
      );

    case "postproduction":
      return (
        <Container>
          <PostProductionList />
        </Container>
      );

    case "actualites":
      return <BlogList />;

    default:
      return <></>;
  }
};

export default SubContentModuleSwitch;
