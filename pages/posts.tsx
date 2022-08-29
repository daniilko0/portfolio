import Layout from "../components/layouts/article";
import {Button, Container, Heading, LinkOverlay, SimpleGrid} from "@chakra-ui/react";
import {GridItem} from "../components/grid-item";
import React from "react";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Posts = () => {
  return (
    <Layout title={"Актуальные публикации"}>
      <Container my={5}>
        <Heading as={"h2"} variant={"page-title"} mb={4}>
          Публикации
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title={"Как я возненавидел Java"}
            href={"https://blog.dadyarri.ru/how-i-hated-java"}
            thumbnails={[
              "/images/posts/webp/why-i-hated-java.webp",
              "/images/posts/png/why-i-hated-java.png"
            ]}
          >
            Погружение в кроличью нору энтерпрайза
          </GridItem>
          <GridItem
            title={"React"}
            href={"https://blog.dadyarri.ru/react"}
            thumbnails={[
              "/images/posts/webp/reactjs.webp",
              "/images/posts/png/reactjs.png"
            ]}
          >
            Возвращение к современному фронтенду с неожиданным выводом
          </GridItem>
          <GridItem
            title={"Nim"}
            href={"https://blog.dadyarri.ru/nim"}
            thumbnails={[
              "/images/posts/webp/nim.webp",
              "/images/posts/png/nim.png"
            ]}
          >
            Моя история знакомства с Nim
          </GridItem>
          <GridItem
            title={"Мои настройки Linux"}
            href={"https://blog.dadyarri.ru/dotfiles"}
            thumbnails={[
              "/images/posts/webp/dotfiles.webp",
              "/images/posts/png/dotfiles.png"
            ]}
          >
            Снова пересобрал свои настройки линукса
          </GridItem>
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
        <Button rightIcon={<ChevronRightIcon />} colorScheme={"blue"} my={3}>
          Все публикации
          <LinkOverlay href={"https://blog.dadyarri.ru"} target={"_blank"} />
        </Button>
      </Container>
    </Layout>
  );
};

export default Posts;
