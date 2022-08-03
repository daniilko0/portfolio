import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Router } from "next/router";

type Props = {
  children: React.ReactNode;
  router: Router;
};

const Main = ({ children, router }: Props) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Даниил Голубев - Главная" />
        <title>Даниил Голубев - Главная</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
