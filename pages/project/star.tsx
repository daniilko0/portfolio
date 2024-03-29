import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {Project} from "../../components/project/project";
import Paragraph from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {ProjectImage} from "../../components/project/project-image";
import {Meta} from "../../components/project/meta";
import React from "react";

const Star = () => {
  return (
    <Layout title={"Student Archive"}>
      <Container my={5}>
        <Project>
          Student Archive <Meta>2022</Meta>
        </Project>
        <Paragraph>
          Приложение для архивирования полезных учебных материалов (лабораторные
          работы, методические материалы и пр.)
        </Paragraph>
        <Paragraph>
          На данный момент разработан только бэкенд (REST API)
        </Paragraph>
        <Paragraph>
          <b>Роль в проекте:</b> технический директор, ведущий разработчик,
          архитектор базы данных
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem my={2}>
            <Meta>Исходный код</Meta>
            <Link href={"https://github.com/student-archive"}>
              https://github.com/student-archive <ExternalLinkIcon mx={1} />
            </Link>
          </ListItem>
        </List>
        <ProjectImage
          srcs={useColorModeValue(
            [
              "/images/projects/star/webp/light/star-endpoint-call.webp",
              "/images/projects/star/jpg/light/star-endpoint-call.jpg"
            ],
            [
              "/images/projects/star/webp/request-screenshot.webp",
              "/images/projects/star/png/request-screenshot.png"
            ]
          )}
          alt={"star endpoint call"}
        />
      </Container>
    </Layout>
  );
};

export default Star;
