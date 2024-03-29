import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
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
                        <ProjectsGridItem
                            id={"choco"}
                            title={"ChocoManager"}
                            labels={[
                                "Python",
                                "FastAPI",
                                "C#",
                                "ASP.NET",
                                "EF Core",
                                "Docker",
                                "Docker Compose",
                                "PostgreSQL",
                                "VK API",
                                "Telegram API",
                                "Typescript",
                                "React"
                            ]}
                            thumbnails={[
                                "/images/projects/choco/webp/common/thumbnail.webp",
                                "/images/projects/choco/png/common/thumbnail.png"
                            ]}
                        >
                            Система работы с клиентами и остатками в интернет-магазине
                        </ProjectsGridItem>
                        <ProjectsGridItem
                            id={"cv"}
                            title={"Сайт-резюме"}
                            labels={["React", "Next.js", "Typescript"]}
                            thumbnails={[
                                "/images/projects/cv/webp/common/thumbnail.webp",
                                "/images/projects/cv/png/common/thumbnail.png"
                            ]}
                        >
                            Этот сайт с резюме и перечнем реализованных проектов
                        </ProjectsGridItem>
                    </SimpleGrid>
                </Section>
                <Section>
                    <Heading as={"h3"} variant={"sectionTitle"}>
                        Работа в команде
                    </Heading>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <ProjectsGridItem
                            id={"star"}
                            title={"Student Archive"}
                            labels={["Java", "Spark framework", "JDBC", "PostgreSQL"]}
                            thumbnails={[
                                "/images/projects/star/webp/thumbnail.webp",
                                "/images/projects/star/png/thumbnail.png"
                            ]}
                        >
                            Приложение для архивирования полезных учебных материалов
                            (лабораторные работы, методические материалы и пр.)
                        </ProjectsGridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    );
};

export default Projects;
