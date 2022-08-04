import {Container, Heading, SimpleGrid, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import {ProjectsGridItem} from "../components/projects-grid-item";
import React from "react";

const Projects = () => {
  return (
    <Layout title={"Проекты"}>
      <Container my={5}>
        <Heading as={"h2"} variant={"page-title"} mb={4}>
          Проекты
        </Heading>

        <Section>
          <Heading as={"h3"} variant={"sectionTitle"}>
            Личные
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectsGridItem
                id={"choco"}
                title={"ChocoManager"}
                labels={[
                  "Python",
                  "FastAPI",
                  "C#",
                  "ASP.NET",
                  "EF Core",
                  "Docker Compose",
                  "PostgreSQL",
                  "VK API",
                  "Telegram API"
                ]}
                thumbnails={[
                  "/images/projects/choco/webp/common/choco-logo.webp",
                  "/images/projects/choco/jpg/common/choco-logo.jpg"
                ]}
              >
                Система работы с клиентами и остатками в интернет-магазине
              </ProjectsGridItem>
            </Section>
            <Section>
              <ProjectsGridItem
                id={"cv"}
                title={"Сайт-резюме"}
                labels={["React", "Next.js", "Typescript"]}
                thumbnails={useColorModeValue(
                  [
                    "/images/projects/cv/webp/light/cv-thumbnail.webp",
                    "/images/projects/choco/png/light/cv-thumbnail.png"
                  ],
                  [
                    "/images/projects/cv/webp/dark/cv-thumbnail.webp",
                    "/images/projects/choco/png/dark/cv-thumbnail.png"
                  ]
                )}
              >
                Этот сайт с резюме и перечнем реализованных проектов
              </ProjectsGridItem>
            </Section>
            <Section>
              <ProjectsGridItem
                id={"todo"}
                title={"To-Do CLI"}
                labels={["Nim"]}
                // thumbnail={'/images/choco_manager_logo.jpg'}
              >
                Менеджер задач в консоли
              </ProjectsGridItem>
            </Section>
          </SimpleGrid>
        </Section>
        <Section>
          <Heading as={"h3"} variant={"sectionTitle"}>
            Работа в команде
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectsGridItem
                id={"star"}
                title={"Student Archive"}
                labels={["Java", "Spark framework", "JDBC", "PostgreSQL"]}
              >
                Приложение для архивирования полезных учебных материалов
                (лабораторные работы, методические материалы и пр.)
              </ProjectsGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Projects;
