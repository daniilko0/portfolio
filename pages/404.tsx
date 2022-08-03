import NextLink from "next/link";
import {Box, Button, Container, Divider, Heading, Text} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import React from "react";

const NotFound = () => {
  return (
    <Layout title={"404"}>
      <Container>
        <Heading as={"h1"}>Страница не найдена</Heading>
        <Text>Запрашиваемая страница не существует</Text>
        <Divider my={6} />
        <Box my={6}>
          <NextLink href={"/"}>
            <Button colorScheme={"blue"}>На главную</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
