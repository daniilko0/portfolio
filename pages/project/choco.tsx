import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Project} from "../../components/project/project";
import Paragraph from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {ProjectImage} from "../../components/project/project-image";
import {Meta} from "../../components/project/meta";
import React from "react";

const Choco = () => {
    return (
        <Layout title={"ChocoManager"}>
            <Container my={5}>
                <Project>
                    ChocoManager <Meta>2021 &ndash; н. в.</Meta>
                </Project>
                <Paragraph>
                    Cистема отслеживания остатков товара и заказов с интеграцией с
                    Магазином ВКонтакте 2.0 и управлением через веб-сайт.
                </Paragraph>
                <Paragraph>
                    Система была внедрена и успешно используется двумя администраторами с
                    ежемесячной аудиторией в районе 500 человек.
                </Paragraph>
                <Paragraph>
                    В число функционала входит создание заказов и поставок, автоматическая синхронизация остатков с
                    интернет-магазином ВКонтакте, построение маршрута от текущего местополжения до адреса доставки,
                    генерация изображения с таблицей остатков товара.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem my={2}>
                        <Meta>Интернет-магазин</Meta>
                        <Link href={"https://vk.com/choco_furmanov"}>
                            https://vk.com/choco_furmanov <ExternalLinkIcon mx={1}/>
                        </Link>
                    </ListItem>
                    <ListItem my={2}>
                        <Meta>Исходный код</Meta>
                        <Link href={"https://github.com/dadyarri/choco"}>
                            https://github.com/dadyarri/choco <ExternalLinkIcon mx={1}/>
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage
                    srcs={[
                        "/images/projects/choco/webp/common/orders-page.webp",
                        "/images/projects/choco/png/common/orders-page.png"
                    ]}
                    alt={"chocomanager orders page"}
                />
            </Container>
        </Layout>
    );
};

export default Choco;
