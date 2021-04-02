import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import Box from "./common/Box";
import Flex from "./common/Flex";

const Content = styled(Box)`
  padding-top: ${(props) => props.theme.sizes.unit};
  padding-bottom: ${(props) => props.theme.sizes.unit};

  @media ${(props) => props.theme.bp[0]} {
    padding-top: calc(2 * ${(props) => props.theme.sizes.unit});
  }
`;

const Layout = ({ children, location }) => {
  const { title, description } = useSiteMetadata();
  return (
    <Flex className="layout" minHeight="100vh" flexDirection="column">
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        <link rel="stylesheet" href="https://use.typekit.net/dyq4dan.css" />
      </Helmet>
      <Navbar location={location} />
      <Content id="content" tabindex="-1" flex={1}>
        {children}
      </Content>
      <Footer />
    </Flex>
  );
};

export default Layout;
