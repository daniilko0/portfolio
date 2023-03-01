import Layout from "../components/layouts/article";
import {Button, Container, Heading, Link, LinkOverlay, SimpleGrid} from "@chakra-ui/react";
import {PostsGridItem} from "../components/posts-grid-item";
import React from "react";
import {ChevronRightIcon, ExternalLinkIcon} from "@chakra-ui/icons";

const Posts = () => {
    return (
        <Layout title={"Актуальные публикации"}>
            <Container my={5}>
                <Heading as={"h2"} variant={"page-title"} mb={4}>
                    Публикации
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <PostsGridItem
                        title={"Подключение валидации к строго типизированной конфигурации в .NET 6+"}
                        href={"https://blog.dadyarri.ru/typed-config-dotnet-6"}
                        thumbnails={[
                            "/images/posts/webp/dotnet-config.webp",
                            "/images/posts/jpg/dotnet-config.jpg"
                        ]}
                    >
                        Перевод <Link
                        href={"https://andrewlock.net/adding-validation-to-strongly-typed-configuration-objects-in-dotnet-6/"}
                        isExternal>статьи <ExternalLinkIcon mx='2px' /></Link> Эндрю Лока
                    </PostsGridItem>
                    <PostsGridItem
                        title={"Windows для разработчика"}
                        href={"https://blog.dadyarri.ru/developer-windows"}
                        thumbnails={[
                            "/images/posts/webp/developer-windows.webp",
                            "/images/posts/png/developer-windows.png"
                        ]}
                    >
                        Экспериментирую с Windows как с основной системой для разработки
                    </PostsGridItem><PostsGridItem
                    title={"Как я возненавидел Java"}
                    href={"https://blog.dadyarri.ru/how-i-hated-java"}
                    thumbnails={[
                        "/images/posts/webp/why-i-hated-java.webp",
                        "/images/posts/png/why-i-hated-java.png"
                    ]}
                >
                    Погружение в кроличью нору энтерпрайза
                </PostsGridItem>
                    <PostsGridItem
                        title={"React"}
                        href={"https://blog.dadyarri.ru/react"}
                        thumbnails={[
                            "/images/posts/webp/reactjs.webp",
                            "/images/posts/png/reactjs.png"
                        ]}
                    >
                        Возвращение к современному фронтенду с неожиданным выводом
                    </PostsGridItem>
                    <PostsGridItem
                        title={"Nim"}
                        href={"https://blog.dadyarri.ru/nim"}
                        thumbnails={[
                            "/images/posts/webp/nim.webp",
                            "/images/posts/png/nim.png"
                        ]}
                    >
                        Моя история знакомства с Nim
                    </PostsGridItem>
                    <PostsGridItem
                        title={"Мои настройки Linux"}
                        href={"https://blog.dadyarri.ru/dotfiles"}
                        thumbnails={[
                            "/images/posts/webp/dotfiles.webp",
                            "/images/posts/png/dotfiles.png"
                        ]}
                    >
                        Снова пересобрал свои настройки линукса
                    </PostsGridItem>
                    <PostsGridItem
                        title={"Control"}
                        href={"https://blog.dadyarri.ru/control"}
                        thumbnails={[
                            "/images/posts/webp/control.webp",
                            "/images/posts/png/control.png"
                        ]}
                    >
                        Немного запоздалого мнения о Control (2019)
                    </PostsGridItem>
                    <PostsGridItem
                        title={"Второй мозг. Reinvented edition"}
                        href={"https://blog.dadyarri.ru/second-mind-ed2"}
                        thumbnails={[
                            "/images/posts/webp/second-mind-ed2.webp",
                            "/images/posts/png/second-mind-ed2.png"
                        ]}
                    >
                        Как я переделал свой воркспейс в Notion
                    </PostsGridItem>
                </SimpleGrid>
                <Button rightIcon={<ChevronRightIcon/>} colorScheme={"blue"} my={3}>
                    Все публикации
                    <LinkOverlay href={"https://blog.dadyarri.ru"} target={"_blank"}/>
                </Button>
            </Container>
        </Layout>
    );
};

export default Posts;
