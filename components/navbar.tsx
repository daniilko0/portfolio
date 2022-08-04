import NextLink from "next/link";
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import {LinkItem} from "./link-item";
import React from "react";
import ChakraNextLink from "./chakra-next-link";

type Props = {
  path: string;
};

const Navbar = (props: Props) => {
  const { path } = props;
  return (
    <Box
      position={"fixed"}
      as={"nav"}
      w={"100%"}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container display={"flex"} p={2} maxW={"container.md"}>
        <Flex align={"center"} mr={5}>
          <NextLink href={"/"}>
            <Heading
              as={"h1"}
              size={"lg"}
              letterSpacing={"tighter"}
              style={{ userSelect: "none", cursor: "pointer" }}
            >
              dadyarri
            </Heading>
          </NextLink>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems={"center"}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={"/projects"} path={path}>
            Проекты
          </LinkItem>
          <LinkItem href={"/posts"} path={path}>
            Публикации
          </LinkItem>
        </Stack>
        {/*@ts-ignore 2322*/}
        <Box flex={1} align={"right"}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={"outline"}
                aria-label={"Options"}
              ></MenuButton>
              <MenuList>
                <ChakraNextLink href={"/"}>
                  <MenuItem>Обо мне</MenuItem>
                </ChakraNextLink>
                <ChakraNextLink href={"/projects"}>
                  <MenuItem>Проекты</MenuItem>
                </ChakraNextLink>
                <ChakraNextLink href={"/posts"}>
                  <MenuItem>Публикации</MenuItem>
                </ChakraNextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
