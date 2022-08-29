import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Project} from "../../components/project/project";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Paragraph from "../../components/paragraph";
import {ProjectImage} from "../../components/project/project-image";
import {Meta} from "../../components/project/meta";
import React from "react";

const Dotversion = () => (
  <Layout title={"Dotversion"}>
    <Container my={5}>
      <Project>
        Dotversion <Meta>2022</Meta>
      </Project>
      <Paragraph>
        Консольное приложение для управления версиями проектов на .NET
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem my={2}>
          <Meta>Исходный код</Meta>
          <Link href={"https://github.com/dadyarri/dotversion"}>
            https://github.com/dadyarri/dotversion
            <ExternalLinkIcon mx={1} />
          </Link>
        </ListItem>
      </List>
      <ProjectImage
        srcs={[
          "/images/projects/dotversion/webp/help-msg.webp",
          "/images/projects/dotversion/png/help-msg.png"
        ]}
        alt={"dotversion help message"}
      />
    </Container>
  </Layout>
);

export default Dotversion;
