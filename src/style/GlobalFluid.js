import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";
import fluid from "fluid-system";

const rootFontSize = (theme) => {
  const fontSize = css({ fontSize: ["16px", "18px", "24px"] });
  const fluidFontSize = fluid(fontSize);

  return {
    html: fluidFontSize(theme),
  };
};

const GlobalFluid = createGlobalStyle(rootFontSize);

export default GlobalFluid;
