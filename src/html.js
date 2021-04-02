import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root { 
            background-color: #19191F;
            color: #FFF;
            font-Weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
          }
          @media screen and (min-width:320px) {
            html {
              font-size: calc(16px + (18 - 16)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            html {
              font-size: calc(18px + (24 - 18)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            html {
              font-size: calc(24px + (42 - 24)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            html {
              font-size: 42px;
            }
          }
          h1,
          .fs-1 {
            font-size: 40px;
            line-height: .8;
            margin: 0;
          }
          @media screen and (min-width:320px) {
            h1,
            .fs-1 {
              font-size: calc(40px + (62 - 40)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            h1,
            .fs-1 {
              font-size: calc(62px + (170 - 62)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            h1,
            .fs-1 {
              font-size: calc(170px + (340 - 170)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            h1,
            .fs-1 {
              font-size: 340px;
            }
          }
          .fs-15 {
            font-size: 36px;
            line-height: .9;
          }
          @media screen and (min-width:320px) {
            .fs-15 {
              font-size: calc(36px + (56 - 36)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            .fs-15 {
              font-size: calc(56px + (140 - 56)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            .fs-15 {
              font-size: calc(140px + (260 - 140)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            .fs-15 {
              font-size: 260px;
            }
          }
          h2,
          .fs-2 {
            font-size: 32px;
          }
          @media screen and (min-width:320px) {
            h2,
            .fs-2 {
              font-size: calc(32px + (44 - 32)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            h2,
            .fs-2 {
              font-size: calc(44px + (75 - 44)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            h2,
            .fs-2 {
              font-size: calc(75px + (150 - 75)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            h2,
            .fs-2 {
              font-size: 150px;
            }
          }
          .fs-25 {
            font-size: 28px;
          }
          @media screen and (min-width:320px) {
            .fs-25 {
              font-size: calc(28px + (36 - 28)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            .fs-25 {
              font-size: calc(36px + (62 - 36)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            .fs-25 {
              font-size: calc(62px + (120 - 62)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            .fs-25 {
              font-size: 120px;
            }
          }
          h3,
          .fs-3 {
            font-size: 26px;
          }
          @media screen and (min-width:320px) {
            h3,
            .fs-3 {
              font-size: calc(26px + (32 - 26)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            h3,
            .fs-3 {
              font-size: calc(32px + (54 - 32)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            h3,
            .fs-3 {
              font-size: calc(54px + (100 - 54)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            h3,
            .fs-3 {
              font-size: 100px;
            }
          }
          h4,
          .fs-4 {
            font-size: 20px;
          }
          @media screen and (min-width:320px) {
            h4,
            .fs-4 {
              font-size: calc(20px + (22 - 20)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            h4,
            .fs-4 {
              font-size: calc(22px + (36 - 22)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            h4,
            .fs-4 {
              font-size: calc(36px + (50 - 36)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            h4,
            .fs-4 {
              font-size: 50px;
            }
          }
          .fs-45 {
            font-size: 22px;
          }
          @media screen and (min-width:320px) {
            .fs-45 {
              font-size: calc(22px + (26 - 22)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            .fs-45 {
              font-size: calc(26px + (44 - 26)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            .fs-45 {
              font-size: calc(44px + (80 - 44)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            .fs-45 {
              font-size: 80px;
            }
          }
          h5,
          .fs-5 {
            font-size: 1rem;
          }
          h6,
          .fs-6 {
            font-size: 14px;
          }
          @media screen and (min-width:320px) {
            h6,
            .fs-6 {
              font-size: calc(14px + (16 - 14)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            h6,
            .fs-6 {
              font-size: calc(16px + (20 - 16)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            h6,
            .fs-6 {
              font-size: calc(20px + (36 - 20)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            h6,
            .fs-6 {
              font-size: 36px;
            }
          }
          .fs-nav {
            font-size: 14px;
          }
          @media screen and (min-width:320px) {
            .fs-nav {
              font-size: calc(14px + (18 - 14)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            .fs-nav {
              font-size: 18px;
            }
          }
          .fs-nav-lg {
            font-size: 16px;
          }
          @media screen and (min-width:320px) {
            .fs-nav-lg {
              font-size: calc(16px + (18 - 16)*(100vw - 320px)/(992 - 320));
            }
          }
          @media screen and (min-width:992px) {
            .fs-nav-lg {
              font-size: calc(18px + (22 - 18)*(100vw - 992px)/(1920 - 992));
            }
          }
          @media screen and (min-width:1920px) {
            .fs-nav-lg {
              font-size: calc(22px + (36 - 22)*(100vw - 1920px)/(3840 - 1920));
            }
          }
          @media screen and (min-width:3840px) {
            .fs-nav-lg {
              font-size: 36px;
            }
          }
        `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
