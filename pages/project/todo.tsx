import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem, UnorderedList, useColorModeValue} from "@chakra-ui/react";
import {Project} from "../../components/project/project";
import Paragraph from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {ProjectImage} from "../../components/project/projectImage";
import {Meta} from "../../components/project/meta";
import React from "react";

const Choco = () => {
  return (
    <Layout title={"To-Do CLI"}>
      <Container my={5}>
        <Project>
          To-Do CLI <Meta>2022</Meta>
        </Project>
        <Paragraph>
          Консольное приложение, позволяющее управлять задачами
        </Paragraph>
        <Paragraph>
          <b>Функционал:</b>
          <UnorderedList ml={10}>
            <ListItem>Добавление задачи</ListItem>
            <ListItem>Удаление задачи</ListItem>
            <ListItem>Установка статуса &quot;Выполнено&quot; задаче</ListItem>
            <ListItem>Отображение списка задач</ListItem>
            <ListItem>
              TODO: Создание, удаление, назначение тегов задачам
            </ListItem>
            <ListItem>TODO: Фильтр списка задач</ListItem>
            <ListItem>TODO: Виджет для zsh темы powerline10k</ListItem>
          </UnorderedList>
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem my={2}>
            <Meta>Исходный код</Meta>
            <Link href={"https://github.com/dadyarri/todo"}>
              https://github.com/dadyarri/todo <ExternalLinkIcon mx={1} />
            </Link>
          </ListItem>
        </List>
        <ProjectImage
          srcs={useColorModeValue(
            [
              "/images/projects/todo/webp/light/todo-cli.webp",
              "/images/projects/todo/png/light/todo-cli.png"
            ],
            [
              "/images/projects/todo/webp/dark/todo-cli.webp",
              "/images/projects/todo/png/dark/todo-cli.png"
            ]
          )}
          alt={"todo cli help"}
        />
      </Container>
    </Layout>
  );
};

export default Choco;
