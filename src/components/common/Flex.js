import { jsx } from "@emotion/react";
import React from "react";
import { color, space, layout, typography } from "styled-system";

// styles = {
//   display: "flex",
//   flexDirection: direction,
//   alignItems: align,
//   justifyContent: justify,
//   flexWrap: wrap,
//   flexBasis: basis,
//   flexGrow: grow,
//   flexShrink: shrink,
// }

const Flex = (props) => {
  const {
    direction,
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    children,
    p,
    ...rest
  } = props;

  const styles = {
    display: "flex",
    flexDirection: direction || "row",
    alignItems: align || "normal",
    justifyContent: justify || "normal",
    flexWrap: wrap || "nowrap",
    flexBasis: basis || "auto",
    flexGrow: grow || 0,
    flexShrink: shrink || 1,
    color,
    space,
    layout,
    typography,
  };

  return (
    <div css={styles} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
