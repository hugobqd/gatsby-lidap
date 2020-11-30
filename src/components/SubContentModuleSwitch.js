import React from "react";
import ProductionList from "./ProductionList";
import PostProductionList from "./PostProductionList";
import BlogList from "./BlogList";
import Container from "./Container";
import { Row, Col } from "./common/GridSystem";

const SubContentModuleSwitch = ({ route }) => {
  switch (route) {
    case "production":
      return <ProductionList />;

    case "postproduction":
      return (
        <Container>
          <Row gap={[0, 2]}>
            <Col span={8}>
              <PostProductionList />
            </Col>
          </Row>
        </Container>
      );

    case "actualites":
      return <BlogList />;

    default:
      return <></>;
  }
};

export default SubContentModuleSwitch;
