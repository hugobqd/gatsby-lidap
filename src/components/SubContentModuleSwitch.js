import React from "react";
import ProductionList from "./list/ProductionList";
import PostProductionList from "./list/PostProductionList";
import BlogList from "./list/BlogList";
import Container from "./common/Container";

const SubContentModuleSwitch = ({ route }) => {
  switch (route) {
    case "production":
      return <ProductionList view="CHRONO" />;

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
