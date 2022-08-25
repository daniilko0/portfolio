import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tooltip
} from "@chakra-ui/react";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoGithub, IoLogoVk } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import {
  DiDotnet,
  DiGit,
  DiLinux,
  DiPostgresql,
  DiPython
} from "react-icons/di";
import { SiDocker, SiGnubash, SiNim, SiTypescript } from "react-icons/si";
import React from "react";

const Page = () => {
  return (
    <Layout title={"Главная"}>
      <Container my={5}>
        <Section delay={0}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Даниил Голубев
              </Heading>
              <p>Бэкенд-разработчик, фанат Jetbrains, Linux-энтузиаст</p>
            </Box>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Image
                alt={"avatar"}
                borderColor={"whiteAlpha.800"}
                borderWidth={2}
                borderStyle={"solid"}
                width={100}
                height={100}
                display={"inline-block"}
                borderRadius={"full"}
                src={"/images/index/webp/avatar.webp"}
                fallbackSrc={"/images/index/jpg/avatar.jpg"}
                marginTop={3}
              />
            </Box>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading variant={"sectionTitle"} as={"h3"}>
            Образование и опыт
          </Heading>
          <BioSection>
            <BioYear>2020 &ndash; н. в.</BioYear>Учусь в ВлГУ, Информационные
            системы и технологии, бакалавр
          </BioSection>
          <BioSection>
            <BioYear>июн &ndash; сен 2021</BioYear>Преподаватель детских
            IT-курсов в академии &quot;top&quot;
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading variant={"sectionTitle"} as={"h3"}>
            Работа
          </Heading>
          <Paragraph>
            Начинающий бэкенд-разработчик и тех-лид, изучаю .NET.
          </Paragraph>
          <Button rightIcon={<ChevronRightIcon />} colorScheme={"blue"} my={3}>
            <NextLink href={"/projects"}>Проекты</NextLink>
          </Button>
        </Section>

        <Section delay={0.3}>
          <Heading variant={"sectionTitle"} as={"h3"}>
            Навыки
          </Heading>
          <SimpleGrid minChildWidth={"123px"} spacingX={1} spacingY={2}>
            <Tooltip hasArrow label={"ef core, asp.net"} placement={"top"}>
              <Tag
                size={"lg"}
                key={"dotnet"}
                variant={"subtle"}
                colorScheme={"blue"}
                w={"fit-content"}
              >
                <TagLeftIcon boxSize={"20px"} as={DiDotnet} />
                <TagLabel>dotnet</TagLabel>
              </Tag>
            </Tooltip>

            <Tooltip hasArrow label={"fastapi, tortoise"} placement={"top"}>
              <Tag
                size={"lg"}
                key={"python"}
                variant={"subtle"}
                colorScheme={"blue"}
                w={"fit-content"}
              >
                <TagLeftIcon boxSize={"20px"} as={DiPython} />
                <TagLabel>python</TagLabel>
              </Tag>
            </Tooltip>

            <Tooltip hasArrow label={"next.js, react"} placement={"top"}>
              <Tag
                size={"lg"}
                key={"typescript"}
                variant={"subtle"}
                colorScheme={"blue"}
                w={"fit-content"}
              >
                <TagLeftIcon boxSize={"20px"} as={SiTypescript} />
                <TagLabel>typescript</TagLabel>
              </Tag>
            </Tooltip>
            <Tag
              size={"lg"}
              key={"nim"}
              variant={"subtle"}
              colorScheme={"blue"}
              w={"fit-content"}
            >
              <TagLeftIcon boxSize={"20px"} as={SiNim} />
              <TagLabel>nim</TagLabel>
            </Tag>
            <Tag
              size={"lg"}
              key={"git"}
              variant={"subtle"}
              colorScheme={"blue"}
              w={"fit-content"}
            >
              <TagLeftIcon boxSize={"20px"} as={DiGit} />
              <TagLabel>git</TagLabel>
            </Tag>
            <Tooltip
              hasArrow
              label={"fedora, arch, ubuntu"}
              placement={"bottom"}
            >
              <Tag
                size={"lg"}
                key={"linux"}
                variant={"subtle"}
                colorScheme={"blue"}
                w={"fit-content"}
              >
                <TagLeftIcon boxSize={"20px"} as={DiLinux} />
                <TagLabel>linux</TagLabel>
              </Tag>
            </Tooltip>
            <Tag
              size={"lg"}
              key={"bash"}
              variant={"subtle"}
              colorScheme={"blue"}
              w={"fit-content"}
            >
              <TagLeftIcon boxSize={"20px"} as={SiGnubash} />
              <TagLabel>bash</TagLabel>
            </Tag>

            <Tooltip hasArrow label={"docker compose"} placement={"bottom"}>
              <Tag
                size={"lg"}
                key={"docker"}
                variant={"subtle"}
                colorScheme={"blue"}
                w={"fit-content"}
              >
                <TagLeftIcon boxSize={"20px"} as={SiDocker} />
                <TagLabel>docker</TagLabel>
              </Tag>
            </Tooltip>
            <Tooltip hasArrow label={"+ pl/pgsql"} placement={"bottom"}>
              <Tag
                size={"lg"}
                key={"postgres"}
                variant={"subtle"}
                colorScheme={"blue"}
                w={"fit-content"}
              >
                <TagLeftIcon boxSize={"20px"} as={DiPostgresql} />
                <TagLabel>postgresql</TagLabel>
              </Tag>
            </Tooltip>
          </SimpleGrid>
        </Section>

        <Section delay={0.4}>
          <Heading variant={"sectionTitle"} as={"h3"}>
            Я в интернете
          </Heading>
          <List>
            <ListItem>
              <Link href={"https://github.com/dadyarri"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"blue"}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @dadyarri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://vk.com/dadyarri"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"blue"}
                  leftIcon={<Icon as={IoLogoVk} />}
                >
                  @dadyarri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://t.me/dadyarri"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"blue"}
                  leftIcon={<Icon as={BsTelegram} />}
                >
                  @dadyarri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://t.me/yadevblog"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"blue"}
                  leftIcon={<Icon as={BsTelegram} />}
                >
                  @yadevblog
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
