import Layout from "../components/layouts/article";
import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import {GridItem} from "../components/grid-item";
import React from "react";

const Posts = () => {
  return (
    <Layout title={"Актуальные публикации"}>
      <Container my={5}>
        <Heading as={"h2"} variant={"page-title"} mb={4}>
          Публикации
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title={"Control"}
            href={"https://blog.dadyarri.ru/control"}
            thumbnails={[
              "/images/posts/webp/control-review.webp",
              "/images/posts/jpg/control-review.jpg"
            ]}
          >
            Немного запоздалого мнения о Control (2019)
          </GridItem>
          <GridItem
            title={"Второй мозг. Reinvented edition"}
            href={"https://blog.dadyarri.ru/second-mind-ed2"}
            thumbnails={[
              "/images/posts/webp/second-mind-ed2.webp",
              "/images/posts/png/second-mind-ed2.png"
            ]}
          >
            Как я переделал свой воркспейс в Notion
          </GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Posts;
