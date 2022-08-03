// noinspection HtmlRequiredTitleElement

import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../libs/theme";
import React from "react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={"ru"}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
