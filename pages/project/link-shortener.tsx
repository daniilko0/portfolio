import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Project} from "../../components/project/project";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Paragraph from "../../components/paragraph";
import {ProjectImage} from "../../components/project/project-image";
import {Meta} from "../../components/project/meta";
import React from "react";

const LinkShortener = () => (
  <Layout title={"Link shortener"}>
    <Container my={5}>
      <Project>
        Сокращатель ссылок <Meta>2022</Meta>
      </Project>
      <Paragraph>
        Простенький сервис для получения сокращённых вариантов длинных ссылок.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem my={2}>
          <Meta>Исходный код</Meta>
          <Link href={"https://github.com/dadyarri/link-shortener"}>
            https://github.com/dadyarri/link-shortener{" "}
            <ExternalLinkIcon mx={1} />
          </Link>
        </ListItem>
        <ListItem my={2}>
          <Meta>Ссылка на сайт</Meta>
          <Link href={"https://link.dadyarri.ru"}>
            https://link.dadyarri.ru
          </Link>
        </ListItem>
      </List>
      <ProjectImage
        srcs={[
          "/images/projects/ls/webp/dark/ls-home-page.webp",
          "/images/projects/ls/png/dark/ls-home-page.png"
        ]}
        alt={"ls home page"}
      />
    </Container>
  </Layout>
);

export default LinkShortener;
