import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {Project} from "../../components/project/project";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Paragraph from "../../components/paragraph";
import {ProjectImage} from "../../components/project/project-image";
import {Meta} from "../../components/project/meta";
import React from "react";

const Cv = () => (
  <Layout title={"CV"}>
    <Container my={5}>
      <Project>
        Сайт-резюме <Meta>2022</Meta>
      </Project>
      <Paragraph>
        Этот сайт с резюме и перечнем реализованных проектов
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem my={2}>
          <Meta>Исходный код</Meta>
          <Link href={"https://github.com/dadyarri/cv"}>
            https://github.com/dadyarri/cv <ExternalLinkIcon mx={1} />
          </Link>
        </ListItem>
        <ListItem my={2}>
          <Meta>Ссылка на сайт</Meta>
          <Link href={"https://dadyarri.ru"}>https://dadyarri.ru</Link>
        </ListItem>
      </List>
      <ProjectImage
        srcs={useColorModeValue(
          [
            "/images/projects/cv/webp/light/cv-home-page.webp",
            "/images/projects/cv/png/light/cv-home-page.png"
          ],
          [
            "/images/projects/cv/webp/dark/cv-home-page.webp",
            "/images/projects/cv/png/dark/cv-home-page.png"
          ]
        )}
        alt={"cv home page"}
      />
    </Container>
  </Layout>
);

export default Cv;
